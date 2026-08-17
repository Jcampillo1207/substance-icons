const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const packagePath = path.join(__dirname, "../package.json");

/**
 * Execute a command and log it
 */
const exec = (command, options = {}) => {
  console.log(`$ ${command}`);
  try {
    return execSync(command, {
      stdio: "inherit",
      ...options,
    });
  } catch (error) {
    console.error(`❌ Error executing: ${command}`);
    throw error;
  }
};

/**
 * Execute a command silently. Returns the trimmed output, or null when the command
 * itself failed — the old version returned "" for both cases, so a broken git made
 * hasChanges() report a clean tree and the pipeline sailed on.
 */
const execSilent = (command) => {
  try {
    return execSync(command, { encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch (error) {
    return null;
  }
};

const getVersion = () => JSON.parse(fs.readFileSync(packagePath, "utf-8")).version;

const gitStatus = () => {
  const status = execSilent("git status --porcelain");
  if (status === null) {
    throw new Error("git status failed — refusing to continue on an unknown repo state");
  }
  return status;
};

/**
 * Paths the release is allowed to commit. Never `git add -A`: it stages whatever else
 * happens to be lying around, including untracked .env files and editor droppings.
 * `:/` anchors a pathspec to the repository root — the lockfile lives there in the
 * workspace, while this script runs from packages/icons.
 */
const RELEASE_PATHS = ["src", "svg", "package.json", ":/package-lock.json"];

const isTracked = (p) => execSilent(`git ls-files --error-unmatch ${p}`) !== null;

/**
 * Two mutually exclusive release paths, so a tag never triggers a second publish of a
 * version that was already pushed to the registry by hand:
 *
 *   mode "local" (ship)   — publish from this machine, do not push. No provenance.
 *   mode "ci"    (deploy) — bump and push the tag; .github/workflows/release.yml
 *                           publishes with provenance via OIDC.
 *
 * @param {{ mode: "local" | "ci" }} options
 */
const release = async ({ mode }) => {
  const push = mode === "ci";
  console.log(`${push ? "🚀 Starting deployment" : "🚢 Starting ship"} process...\n`);

  try {
    // Reinstall from the lockfile so the published artifact is built against a known tree.
    // Skipped while node_modules is committed: `npm ci` wipes and reinstalls it, which
    // would leave thousands of spurious modifications in the working tree.
    if (isTracked(":/node_modules")) {
      console.log(
        "⚠️  node_modules is tracked by git — skipping `npm ci`.\n" +
          "   Run `git rm -r --cached node_modules` once, then this step turns on.\n"
      );
    } else {
      console.log("📥 Installing from lockfile...");
      exec("npm ci");
      console.log("");
    }

    console.log("📦 Generating icons...");
    exec("npm run generate-icons");
    console.log("");

    // Gate before committing anything: a broken generator run must not reach the repo,
    // let alone npm. `npm publish` re-runs these via prepack; this catches them earlier.
    console.log("🔍 Typechecking...");
    exec("npm run typecheck");
    console.log("");

    console.log("🔨 Building project...");
    exec("npm run build");
    console.log("");

    console.log("🧪 Running tests...");
    exec("npm test");
    console.log("");

    if (gitStatus()) {
      console.log("📝 Changes detected. Committing generated files...");
      exec(`git add ${RELEASE_PATHS.join(" ")}`);
      // Nothing staged is a legitimate outcome (only ignored files changed); a commit
      // that fails for any other reason must stop the release.
      if (execSilent("git diff --cached --quiet") === null) {
        exec('git commit -m "chore: regenerate icons and build"');
      } else {
        console.log("✨ Nothing staged to commit");
      }
      console.log("");
    } else {
      console.log("✨ No changes to commit\n");
    }

    console.log("📈 Incrementing version...");
    exec("npm version patch");
    const newVersion = getVersion();
    console.log(`✅ New version: ${newVersion}\n`);

    // `npm version` makes exactly one commit whose message is the bare version string.
    // Verifying that before any reset means a surprise HEAD is never discarded.
    const rollback = (reason) => {
      console.error(`\n❌ ${reason} — rolling back v${newVersion}`);
      const head = execSilent("git log -1 --pretty=%s");
      if (head === newVersion) {
        exec(`git tag -d v${newVersion}`);
        exec("git reset --hard HEAD~1");
        console.error(`↩️  Rolled back to ${getVersion()}`);
      } else {
        console.error(
          `⚠️  HEAD is "${head}", not "${newVersion}" — leaving the repo alone.\n` +
            `   Undo manually: git tag -d v${newVersion} && git reset --hard HEAD~1`
        );
      }
    };

    if (push) {
      console.log("🔼 Pushing to GitHub...");
      try {
        exec("git push --follow-tags");
      } catch (error) {
        rollback("Push failed");
        throw error;
      }
      console.log("");
      console.log("✅ Tag pushed.");
      console.log(
        `🎉 v${newVersion} is now building in CI; Release publishes it to npm with provenance.`
      );
      console.log("   https://github.com/Jcampillo1207/substance-icons/actions");
    } else {
      console.log("📤 Publishing to npm from this machine...");
      try {
        // --access comes from publishConfig. No provenance: that needs CI with OIDC,
        // which is what `npm run deploy` goes through.
        exec("npm publish");
      } catch (error) {
        rollback("Publish failed");
        throw error;
      }
      console.log("");
      console.log("✅ Ship completed successfully!");
      console.log(`🎉 Version ${newVersion} published to npm, without provenance.\n`);
      console.log("⚠️  Not pushed. The tag would trigger a second publish and fail, so:");
      console.log("   git push && git push origin :refs/tags/v" + newVersion + " || true");
      console.log("   (or prefer `npm run deploy`, which publishes through CI)");
    }
  } catch (error) {
    // With stdio "inherit" the real output already went to the terminal; error.message is
    // just "Command failed: …". The exit status is the part worth surfacing.
    const status = error.status !== undefined ? ` (exit ${error.status})` : "";
    console.error(`\n❌ ${push ? "Deployment" : "Ship"} failed${status}:`, error.message);
    process.exit(1);
  }
};

module.exports = { release };
