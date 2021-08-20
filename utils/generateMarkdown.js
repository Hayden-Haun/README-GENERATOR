// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none") {
    return `## License
    this project is licensed with ${license}.`;
  }
  return "";

  //BADGE EXAMPLE / CODE https://naereen.github.io/badges/
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## Author
  Name: ${data.userName}

  ## Liscence 

  ## Table of Contents

  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Tests

  ${data.test}

  ## Contributing
  
  ${data.contributon}

  ## Questions
  Conact email: ${data.email}
`;
}

module.exports = generateMarkdown;
