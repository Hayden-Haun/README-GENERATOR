//  Function returns a license badge based on which liscence the user chooses. It calls the renderLicense function if the user chooses any option except "none"
function renderLicenseBadge(license) {
  if (license != "None") {
    return renderLicenseLink(license);
  } else {
    return ``;
  }
}

// Function returns the URL for the badge image.
function renderLicenseLink(license) {
  return `![npm](https://img.shields.io/static/v1?label=npm&message=${license}&color=orange)`;
}

// This function creates the license section of README.md if the user selects any option except "none"
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License
    
    This project is licensed with ${license}.`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
//This function generates the README.md file based on the user's inputs. It calls render liscence functions if the user chooses any option except "none"
function generateMarkdown(data) {
  return `# ${data.project}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Technologies Used](#technologies)
  - [Questions](#questions)

  ## Description

    ${data.description}

  ## Installation

    ${data.installation}

  ## Contributing
  
    ${data.contributon}

  ## Usage

    ${data.usage}

  ## Tests

    ${data.test}

  ${renderLicenseSection(data.license)} 

  ## Questions
  
    For additional questions, please contact GitHub user ${data.userName} at ${
    data.email
  }
`;
}

//Export code to index.js
module.exports = generateMarkdown;
