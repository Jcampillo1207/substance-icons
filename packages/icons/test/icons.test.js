// Runs against dist/, not src/, so it asserts on the artifact that actually ships.
// `npm run prepack` builds before calling this; running it standalone needs `npm run build` first.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const distEntry = path.join(__dirname, "..", "dist", "index.cjs.js");
if (!fs.existsSync(distEntry)) {
  throw new Error(`${distEntry} not found — run "npm run build" first.`);
}

const icons = require(distEntry);
const names = Object.keys(icons);
const iconNames = names.filter((n) => n !== "Substance");

/** Render, capturing anything React logs to console.error (its dev warning channel). */
const renderWithWarnings = (element) => {
  const warnings = [];
  const original = console.error;
  console.error = (...args) => warnings.push(String(args[0]));
  try {
    return { html: renderToStaticMarkup(element), warnings };
  } finally {
    console.error = original;
  }
};

const propsUnderTest = {
  "data-testid": "probe",
  id: "probe-id",
  role: "img",
  "aria-label": "probe label",
  tabIndex: 0,
  style: { color: "rgb(255, 0, 0)" },
};

test("exports at least the universal component plus icons", () => {
  assert.ok(names.includes("Substance"), "Substance is not exported");
  assert.ok(iconNames.length > 0, "no icon components exported");
});

test("every export is a forwardRef component with a matching displayName", () => {
  const forwardRefType = Symbol.for("react.forward_ref");
  for (const name of names) {
    assert.equal(
      icons[name].$$typeof,
      forwardRefType,
      `${name} is not a forwardRef component, so ref is silently dropped`
    );
    assert.equal(
      icons[name].displayName,
      name,
      `${name} has displayName ${JSON.stringify(icons[name].displayName)}`
    );
  }
});

// The regression this whole file exists for: 195 published versions destructured
// `style` and `...props` and then rendered an <svg> that referenced neither.
test("every icon forwards arbitrary SVG props to the rendered <svg>", () => {
  for (const name of iconNames) {
    const { html } = renderWithWarnings(
      React.createElement(icons[name], propsUnderTest)
    );
    assert.match(html, /data-testid="probe"/, `${name} dropped data-testid`);
    assert.match(html, /id="probe-id"/, `${name} dropped id`);
    assert.match(html, /role="img"/, `${name} dropped role`);
    assert.match(html, /aria-label="probe label"/, `${name} dropped aria-label`);
    assert.match(html, /tabindex="0"/, `${name} dropped tabIndex`);
    assert.match(html, /style="color:/, `${name} dropped style`);
  }
});

test("Substance forwards arbitrary props through to the resolved icon", () => {
  const { html } = renderWithWarnings(
    React.createElement(icons.Substance, {
      name: iconNames[0],
      ...propsUnderTest,
    })
  );
  assert.match(html, /data-testid="probe"/);
  assert.match(html, /role="img"/);
});

// Hyphenated JSX attributes (stroke-width instead of strokeWidth) render fine but make
// React log an "Invalid DOM property" warning for every consumer in development.
test("rendering emits no React warnings", () => {
  const all = [];
  for (const name of iconNames) {
    const { warnings } = renderWithWarnings(
      React.createElement(icons[name], { size: 24 })
    );
    all.push(...warnings.map((w) => `${name}: ${w}`));
  }
  assert.deepEqual(all, [], "React logged warnings while rendering icons");
});

test("size and color props reach the rendered output", () => {
  const { html } = renderWithWarnings(
    React.createElement(icons[iconNames[0]], { size: 48, color: "tomato" })
  );
  assert.match(html, /width="48"/);
  assert.match(html, /height="48"/);
  assert.match(html, /tomato/);
});

test("consumer props win over the generated defaults", () => {
  const { html } = renderWithWarnings(
    React.createElement(icons[iconNames[0]], { width: 99, className: "mine" })
  );
  assert.match(html, /width="99"/, "explicit width did not override size");
  assert.match(html, /class="mine"/);
});

test("the IconName union covers every exported icon", () => {
  const dts = path.join(__dirname, "..", "dist", "types", "icons", "types.d.ts");
  const union = fs.readFileSync(dts, "utf-8");
  const members = [...union.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(
    [...members].sort(),
    [...iconNames].sort(),
    "IconName drifted from the set of exported icons"
  );
});
