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

/** Paths the release is allowed to commit. Never `git add -A`: it stages whatever else */
/** happens to be lying around, including untracked .env files and editor droppings. */
const RELEASE_PATHS = ["src", "svg", "package.json", "package-lock.json"];

const isTracked = (p) => execSilent(`git ls-files --error-unmatch ${p}`) !== null;

/**
 * @param {{ push: boolean }} options - whether to push the commit and tag when done.
 */
const release = async ({ push }) => {
  console.log(`${push ? "🚀 Starting deployment" : "🚢 Starting ship"} process...\n`);

  try {
    // Reinstall from the lockfile so the published artifact is built against a known tree.
    // Skipped while node_modules is committed: `npm ci` wipes and reinstalls it, which
    // would leave thousands of spurious modifications in the working tree.
    if (isTracked("node_modules")) {
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

    console.log("📤 Publishing to npm...");
    try {
      // --access and provenance come from publishConfig in package.json.
      exec("npm publish");
    } catch (error) {
      console.error(`\n❌ Publish failed — rolling back v${newVersion}`);
      // `npm version` makes exactly one commit whose message is the bare version string.
      // Verify that before resetting, so a surprise HEAD is never discarded.
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
      throw error;
    }
    console.log("");

    if (push) {
      // Push before declaring success: the npm version is already immutable, so a commit
      // and tag that only exist on this laptop is the worst state to end in.
      console.log("🔼 Pushing to GitHub...");
      exec("git push --follow-tags");
      console.log("");
      console.log("✅ Deployment completed successfully!");
      console.log(`🎉 Version ${newVersion} published and pushed to GitHub`);
    } else {
      console.log("✅ Ship completed successfully!");
      console.log(`🎉 Version ${newVersion} published to npm\n`);
      console.log("⚠️  Don't forget to push to GitHub:");
      console.log("   git push --follow-tags");
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
