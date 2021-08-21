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

//This function generates the README.md file based on the user's inputs. It calls render liscence functions if the user chooses any option except "none"
function generateMarkdown(data) {
  return `# ${data.project}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Contributions](#contributions)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Technologies Used](#technologies)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Description

    ${data.description}

  ## Installation

    ${data.installation}

  ## Contributions
  
    ${data.contributon}

  ## Usage

    ${data.usage}

  ## Tests

    ${data.test}

  ## Technologies

    ${data.technologies}

  ${renderLicenseSection(data.license)} 

  ## Credits

    ${data.credits}

  ## Questions
  
    For additional questions, please contact GitHub user ${data.userName} at ${
    data.email
  }
`;
}

//Export code to index.js
module.exports = generateMarkdown;
