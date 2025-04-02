const { execSync } = require("child_process");
const fs = require("fs");

(async () => {
  try {
    // Fetch changed files
    console.log("Fetching changed files...");
    const diffCommand = "git diff --name-only origin/main...HEAD";
    const changedFiles = execSync(diffCommand).toString().trim().split("\n");

    // Filter JavaScript files
    const jsFiles = changedFiles.filter((file) => file.endsWith(".js"));

    if (jsFiles.length === 0) {
      console.log("No JavaScript files changed, skipping ESLint.");
      process.exit(0); // Exit with success
    }

    console.log("Running ESLint on the following files:");
    console.log(jsFiles.join("\n"));

    // Run ESLint
    const eslintCommand = `npx eslint ${jsFiles.join(" ")}`;
    execSync(eslintCommand, { stdio: "inherit" }); // Inherit stdio to show output
  } catch (error) {
    console.error("Error during ESLint execution:", error.message);
    process.exit(1); // Exit with failure
  }
})();
