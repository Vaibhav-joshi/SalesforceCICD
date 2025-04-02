// Get the branch name from environment variables
const branchName = process.env.BRANCH_NAME;

// Define the required regex pattern
const branchPattern = /^feature\/[a-zA-Z]+\.[a-zA-Z]+\/US[0-9]+$/;

// Validate the branch name format
if (branchPattern.test(branchName)) {
  console.log(`Branch name is valid: ${branchName}`);
} else {
  console.error(
    `Invalid branch name: ${branchName}\n` +
      `Expected format: feature/firstname.lastname/US{number}`
  );
  process.exit(1); // Exit with failure
}

// Check for the presence of a username
const usernamePattern = /^[a-zA-Z]+\.[a-zA-Z]+$/; // Pattern for firstname.lastname
const username = branchName.split("/")[1]; // Extract 'firstname.lastname'

if (usernamePattern.test(username)) {
  console.log(`Username is valid: ${username}`);
} else {
  console.error(
    `Invalid username: ${username}\nExpected format: firstname.lastname`
  );
  process.exit(1); // Exit with failure
}
