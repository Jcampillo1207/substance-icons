const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

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
 * Execute a command silently and return output
 */
const execSilent = (command) => {
  try {
    return execSync(command, { encoding: "utf-8" }).trim();
  } catch (error) {
    return "";
  }
};

/**
 * Check if there are uncommitted changes
 */
const hasChanges = () => {
  const status = execSilent("git status --porcelain");
  return status.length > 0;
};

/**
 * Get current package version
 */
const getVersion = () => {
  const packagePath = path.join(__dirname, "../package.json");
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
  return packageJson.version;
};

/**
 * Main deploy function
 */
const deploy = async () => {
  console.log("🚀 Starting deployment process...\n");

  try {
    // Generate icons
    console.log("📦 Generating icons...");
    exec("npm run generate-icons");
    console.log("");

    // Build
    console.log("🔨 Building project...");
    exec("npm run build");
    console.log("");

    // Check if there are changes to commit
    if (hasChanges()) {
      console.log("📝 Changes detected. Committing generated files...");
      exec("git add -A");
      try {
        exec('git commit -m "chore: regenerate icons and build"');
      } catch (error) {
        console.log("⚠️  No changes to commit or commit failed");
      }
      console.log("");
    } else {
      console.log("✨ No changes to commit\n");
    }

    // Increment version
    console.log("📈 Incrementing version...");
    exec("npm version patch");
    const newVersion = getVersion();
    console.log(`✅ New version: ${newVersion}\n`);

    // Publish to npm
    console.log("📤 Publishing to npm...");
    exec("npm publish --access public");
    console.log("");

    // Push to GitHub
    console.log("🔼 Pushing to GitHub...");
    exec("git push");
    exec("git push --tags");
    console.log("");

    console.log("✅ Deployment completed successfully!");
    console.log(`🎉 Version ${newVersion} published and pushed to GitHub`);
  } catch (error) {
    console.error("\n❌ Deployment failed:", error.message);
    process.exit(1);
  }
};

// Run deploy
deploy();
