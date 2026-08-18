const fs = require("fs-extra");
const path = require("path");
const { transform } = require("@svgr/core");
const { optimize } = require("svgo");

const svgDir = path.join(__dirname, "../svg");
const iconsDir = path.join(__dirname, "../src/icons");
const indexFile = path.join(__dirname, "../src/index.ts");
const typesFile = path.join(__dirname, "../src/icons/types.ts");

/**
 * Code-point comparator. localeCompare would order differently depending on the
 * machine's ICU build and locale, which is exactly what must not vary here.
 */
const byName = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Convert SVG content to base64
 */
const svgToBase64 = (svgContent) => {
  return Buffer.from(svgContent).toString("base64");
};

/**
 * Generate a React component from an SVG file
 */
const generateIconComponent = async (filePath, iconName) => {
  let svgCode = await fs.readFile(filePath, "utf-8");

  // Store original SVG for base64 conversion
  const originalSvg = svgCode;

  // Optimize the SVG
  const optimizedSvg = optimize(svgCode, {
    path: filePath,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      // cleanupIds (inside preset-default) minifies every id down to "a", so any two
      // icons with a clipPath or gradient end up defining id="a" on the same page and
      // url(#a) resolves against whichever rendered first. Namespacing by icon name
      // makes each definition unique. Runs after preset-default, on the minified ids.
      { name: "prefixIds", params: { prefix: iconName, delim: "_", prefixClassNames: false } },
      "removeXMLNS",
    ],
  });
  svgCode = optimizedSvg.data;

  // Generate base64 from optimized SVG
  const svgBase64 = svgToBase64(svgCode);

  // Transform the optimized SVG into a React component
  const jsxCode = await transform(
    svgCode,
    {
      icon: true,
      typescript: true,
      expandProps: "end",
      svgo: false, // Already optimized
      jsx: {
        babelConfig: {
          plugins: [
            [
              "@svgr/babel-plugin-replace-jsx-attribute-value",
              {
                values: [
                  {
                    value: "currentColor",
                    // No braces: babel parses the value as an expression, and "{...}"
                    // parses as a block, leaving .expression undefined and throwing.
                    newValue: "color || 'currentColor'",
                    literal: true,
                  },
                ],
              },
            ],
          ],
        },
      },
    },
    { componentName: iconName }
  );

  // Extract just the SVG content from the generated JSX
  // The jsxCode will contain something like:
  // import * as React from "react";
  // const SvgComponent = (props) => (<svg>...</svg>);
  // export default SvgComponent;

  // Extract the SVG element from the JSX code
  const svgMatch = jsxCode.match(/<svg[\s\S]*?<\/svg>/);
  if (!svgMatch) {
    throw new Error(
      `Could not extract SVG from generated code for ${iconName}`
    );
  }

  let svgContent = svgMatch[0];

  // Remove width/height from the ROOT <svg> tag only. A global replace would also strip
  // the geometry attributes that <rect>, <image>, <use>, <pattern> and <mask> require,
  // silently producing zero-area children that never paint.
  svgContent = svgContent.replace(/^<svg[^>]*>/, (tag) =>
    tag.replace(/\s+(width|height)=("[^"]*"|\{[^}]*\})/g, "")
  );

  // Replace color attributes with dynamic props.
  // What keeps `stroke-width` etc. out of these patterns is the literal `="` in each one,
  // not a lookahead — `stroke-width=` never matches `stroke="`.
  svgContent = svgContent
    // Handle fill attributes
    .replace(/fill="currentColor"/g, 'fill={color || "currentColor"}')
    .replace(/fill='currentColor'/g, 'fill={color || "currentColor"}')
    .replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill={color || "currentColor"}')
    .replace(/fill='#[0-9a-fA-F]{3,6}'/g, 'fill={color || "currentColor"}')
    // Handle stroke attributes (but not stroke-dasharray, stroke-width, etc).
    // The leading (\s) keeps `data-stroke="…"` and similar suffixed names out.
    .replace(/(\s)stroke="currentColor"/g, '$1stroke={color || "currentColor"}')
    .replace(/(\s)stroke='currentColor'/g, '$1stroke={color || "currentColor"}')
    .replace(
      /(\s)stroke="#[0-9a-fA-F]{3,6}"/g,
      '$1stroke={color || "currentColor"}'
    )
    .replace(
      /(\s)stroke='#[0-9a-fA-F]{3,6}'/g,
      '$1stroke={color || "currentColor"}'
    );

  // React rejects hyphenated SVG presentation attributes and logs a dev warning for each
  // one. svgr would camelCase them, but its transform is bypassed by the extraction above,
  // so map them here. Allowlist only: data-* and aria-* must stay hyphenated.
  const SVG_ATTR_CAMEL = {
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-miterlimit": "strokeMiterlimit",
    "stroke-opacity": "strokeOpacity",
    "fill-rule": "fillRule",
    "fill-opacity": "fillOpacity",
    "clip-path": "clipPath",
    "clip-rule": "clipRule",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "text-anchor": "textAnchor",
    "font-family": "fontFamily",
    "font-size": "fontSize",
    "font-weight": "fontWeight",
    "paint-order": "paintOrder",
    "vector-effect": "vectorEffect",
  };
  svgContent = svgContent.replace(
    new RegExp(`(\\s)(${Object.keys(SVG_ATTR_CAMEL).join("|")})=`, "g"),
    (_, ws, attr) => `${ws}${SVG_ATTR_CAMEL[attr]}=`
  );

  // Inject our props into the opening svg tag. Our defaults go first and {...props} last,
  // so a consumer-supplied className, style, fill or viewBox overrides the generated one.
  svgContent = svgContent.replace(/^<svg([^>]*)>/, (_, attrs) => {
    const rest = attrs.trim() ? `\n    ${attrs.trim()}` : "";
    return (
      `<svg\n    ref={ref}\n    className={className}\n    width={size}` +
      `\n    height={size}\n    style={style}${rest}\n    {...props}\n  >`
    );
  });

  // Create the component with TypeScript interface
  const componentCode = `import React from 'react';

export interface ${iconName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name ${iconName}
 * @description Automatically generated SVG icon component for ${iconName}.
 * @preview ![img](data:image/svg+xml;base64,${svgBase64})
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number|string} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const ${iconName} = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, ${iconName}Props>(({
  size = 24,
  color = "currentColor",
  className,
  style,
  ...props
}, ref) => (
    ${svgContent}
  )),
  // displayName goes inside a pure expression, not a separate assignment statement.
  // A top-level \`X.displayName = "X"\` is a side effect that no bundler may drop, and in a
  // single-file bundle that one statement pins every icon into every consumer build.
  { displayName: "${iconName}" }
);

export default ${iconName};
`;

  // Write the component file
  const componentPath = path.join(iconsDir, `${iconName}.tsx`);
  await fs.outputFile(componentPath, componentCode);

  console.log(`  ✓ Generated ${iconName}`);
};

/**
 * Generate the universal Icon component (Substance)
 */
const generateUniversalIconComponent = async () => {
  const files = await fs.readdir(iconsDir);
  const iconNames = files
    .filter((file) => file.endsWith(".tsx") && file !== "Substance.tsx")
    .map((file) => path.basename(file, ".tsx"))
    .sort(byName);

  const iconImports = iconNames
    .map((iconName) => `import ${iconName} from './${iconName}';`)
    .join("\n");

  const componentCode = `import React from 'react';
${iconImports}
import type { IconName } from './types';

export interface SubstanceProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Substance
 * @description Universal icon component that renders any icon by name.
 * @param {object} props - Component props.
 * @param {IconName} props.name - The name of the icon to render.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element | null} JSX element representing the SVG icon.
 */

const Substance = /*#__PURE__*/ Object.assign(
  /*#__PURE__*/ React.forwardRef<SVGSVGElement, SubstanceProps>(({
  name,
  size = 24,
  color = "currentColor",
  className,
  ...props
}, ref) => {
  const icons: Record<string, React.ComponentType<any>> = { ${iconNames.join(
    ", "
  )} };
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(\`Icon "\${name}" not found\`);
    return null;
  }

  return (
    <IconComponent
      ref={ref}
      size={size}
      color={color}
      className={className}
      {...props}
    />
  );
  }),
  { displayName: "Substance" }
);

export default Substance;
`;

  const componentPath = path.join(iconsDir, "Substance.tsx");
  await fs.outputFile(componentPath, componentCode);
  console.log("  ✓ Generated Substance universal component");
};

/**
 * Generate the main index.ts file with all exports
 */
const generateIndexFile = async () => {
  const files = await fs.readdir(iconsDir);
  const iconNames = files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => path.basename(file, ".tsx"))
    .sort(byName);

  const exports = iconNames
    .map(
      (iconName) =>
        `export { default as ${iconName} } from './icons/${iconName}';\n` +
        `export type { ${iconName}Props } from './icons/${iconName}';`
    )
    .join("\n");

  // `export type` (not `export`): a value-position re-export of a type survives into the
  // published .d.ts and makes esbuild fail with "No matching export ... for import IconName".
  const indexContent = `${exports}\nexport type { IconName } from './icons/types';\n`;
  await fs.outputFile(indexFile, indexContent);
  console.log("  ✓ Generated index file");
};

/**
 * Convert kebab-case or snake_case to PascalCase.
 * Throws rather than emitting a component name that is not a legal JS identifier — an
 * invalid name breaks Substance.tsx and index.ts, which fails the whole build with an
 * error that never mentions the offending SVG.
 */
const toPascalCase = (str) => {
  const name = str
    .replace(/[^a-zA-Z0-9]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^\w/, (c) => c.toUpperCase());
  const safe = /^[0-9]/.test(name) ? `Icon${name}` : name;
  if (!/^[A-Z][A-Za-z0-9]*$/.test(safe)) {
    throw new Error(`Cannot derive a component name from "${str}"`);
  }
  return safe;
};

/**
 * Walk svg/ recursively and resolve every SVG to its component name.
 * Runs as a separate pass before anything is written or deleted, so a collision or an
 * unusable filename aborts while src/icons is still intact.
 *
 * @returns {Promise<Map<string, string>>} iconName -> source file path
 */
const collectIcons = async (dir, out = new Map()) => {
  // readdir order is filesystem-dependent, so sorting is what makes the generated
  // index.ts, types.ts and Substance.tsx byte-identical across machines and CI.
  const entries = (await fs.readdir(dir, { withFileTypes: true })).sort((a, b) =>
    byName(a.name, b.name)
  );

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await collectIcons(filePath, out);
    } else if (path.extname(entry.name).toLowerCase() === ".svg") {
      const iconName = toPascalCase(
        path.basename(entry.name, path.extname(entry.name))
      );
      // The name comes from the basename alone, so two files with the same basename in
      // different subdirectories used to overwrite each other silently, and which one
      // survived depended on readdir order — i.e. on the filesystem.
      if (out.has(iconName)) {
        throw new Error(
          `Icon name collision: "${iconName}" from ${filePath} and ${out.get(iconName)}`
        );
      }
      out.set(iconName, filePath);
    }
  }

  return out;
};

/**
 * Main function to generate all icons
 */
const generateIcons = async () => {
  console.log("🎨 Substance Icons Generator");
  console.log("===========================\n");

  // Check if svg directory exists
  if (!fs.existsSync(svgDir)) {
    console.error(`❌ Error: SVG directory not found at ${svgDir}`);
    console.log("\nPlease create the 'svg' directory and add your SVG files.");
    process.exit(1);
  }

  // Resolve every icon name up front. This walks recursively — the old check only looked
  // at the top level while generation recursed, so organising svg/ into subfolders turned
  // this whole script into a silent no-op that still exited 0.
  const icons = await collectIcons(svgDir);
  const totalSvgs = icons.size;

  const existingComponents = (await fs.pathExists(iconsDir))
    ? (await fs.readdir(iconsDir)).filter(
        (f) => f.endsWith(".tsx") && f !== "Substance.tsx"
      ).length
    : 0;

  // emptyDir below wipes src/icons unconditionally, so refuse to run when the input
  // cannot account for what is already there. Exit 1, not 0: `dev` and `deploy` chain
  // off this and used to sail past the warning and publish stale output as a success.
  if (totalSvgs === 0) {
    console.error("❌ No SVG files found in svg/. Aborting.");
    console.log("\nAdd SVG files to the 'svg' directory and run this again.");
    process.exit(1);
  }
  if (totalSvgs < existingComponents) {
    console.error(
      `❌ Refusing to regenerate: ${totalSvgs} SVGs vs ${existingComponents} existing components.`
    );
    console.log(
      "\nThis would delete icons. Restore the missing SVGs, or clear src/icons deliberately."
    );
    process.exit(1);
  }

  // Clean the icons directory
  await fs.emptyDir(iconsDir);
  console.log("🧹 Cleaned icons directory\n");

  // Process all SVG files
  console.log("📦 Generating icon components:");
  for (const [iconName, filePath] of icons) {
    await generateIconComponent(filePath, iconName);
  }

  // Write the types file in one shot. Appending per icon left it truncated and
  // syntactically invalid whenever a run threw partway through.
  await fs.outputFile(
    typesFile,
    `export type IconName =\n${[...icons.keys()]
      .map((name) => `  | "${name}"`)
      .join("\n")};\n`
  );

  // Generate universal component and index
  console.log("\n🔧 Generating utility files:");
  await generateUniversalIconComponent();
  await generateIndexFile();

  console.log("\n✅ Icons generated successfully!");
  console.log(`📊 Total icons: ${icons.size}\n`);
};

// Run the generator
generateIcons().catch((err) => {
  console.error("\n❌ Error generating icons:", err);
  process.exit(1);
});
