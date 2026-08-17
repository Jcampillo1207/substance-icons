const { execSync } = require("child_process");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
const version = packageJson.version;

(async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "releaseName",
      message: "Enter the release name:",
      default: `v${version}`,
    },
    {
      type: "input",
      name: "releaseDescription",
      message: "Enter the release description:",
    },
  ]);

  console.log("Creating GitHub release");
  try {
    execSync(
      `gh release create ${answers.releaseName} --title "${answers.releaseName}" --notes "${answers.releaseDescription}" --target main`,
      { stdio: "inherit" }
    );
    console.log("GitHub release created successfully.");
  } catch (error) {
    console.error("Error creating GitHub release:", error.message);
  }
})();
