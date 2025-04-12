console.log(`Current working directory: ${process.cwd()}`);

const branchName = process.env.BRANCH_NAME;
const username = branchName.split("/")[1];

const usernamePattern = /^[a-zA-Z]+\.[a-zA-Z]+$/;
const branchPattern = /^feature\/[a-zA-Z]+\.[a-zA-Z]+\/US[0-9]+$/;

// Validate the branch name format
if (branchPattern.test(branchName) && usernamePattern.test(username)) {
  console.log(`Branch name is valid: ${branchName}`);
} else {
  console.error(
    `Invalid branch name: ${branchName}\n` +
      `Expected new format: feature/firstname.lastname/US{number}`
  );
  process.exit(1); // Exit with failure  
}
