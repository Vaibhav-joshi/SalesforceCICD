const { execSync } = require("child_process");

(async () => {
  try {
    // Define the directories to search
    const directories = [
      "SFProject/force-app/main/default/aura",
      "SFProject/force-app/main/default/lwc"
    ];

    // Build the find command
    const findCommand = `find ${directories.join(" ")} -name "*.js"`;
    console.log(`Looking for JavaScript files in: ${directories.join(", ")}`);

    // Execute the find command
    const files = execSync(findCommand).toString().trim().split("\n");

    // Check if any files were found
    if (files.length === 0 || files[0] === "") {
      console.log("No JavaScript files found in aura and lwc folders. Skipping ESLint.");
      process.exit(0); // Exit gracefully
    }

    // Log the found files
    console.log("Found the following JavaScript files:");
    files.forEach(file => console.log(file));

    // Run ESLint on the found files
    const eslintCommand = `npx eslint ${files.join(" ")}`;
    console.log("Running ESLint...");
    execSync(eslintCommand, { stdio: "inherit" }); // Inherit stdio to display ESLint output
    console.log("ESLint completed successfully!");
  } catch (error) {
    console.error("Error during ESLint execution:", error.message);
    process.exit(1); // Exit with failure
  }
})();
