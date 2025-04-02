const { execSync } = require("child_process");

console.log("Downloading Salesforce CLI...");
execSync(
  "wget https://developer.salesforce.com/media/salesforce-cli/sfdx-linux-amd64.tar.xz",
  { stdio: "inherit" }
);

console.log("Extracting Salesforce CLI...");
execSync(
  "mkdir -p sfdx-cli && tar xJf sfdx-linux-amd64.tar.xz -C sfdx-cli --strip-components 1",
  { stdio: "inherit" }
);

console.log("Installing Salesforce CLI...");
execSync("./sfdx-cli/install", { stdio: "inherit" });
console.log("Salesforce CLI installation completed.");
