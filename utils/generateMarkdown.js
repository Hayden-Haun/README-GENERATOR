// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //BADGE EXAMPLE / CODE https://naereen.github.io/badges/
  //[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)
  if (license != "none") {
    //return renderLicenseLink(license);
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/static/v1?label=npm&message=$%7Binput.license%7D&color=orange`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `## License
      This project is licensed with ${license}.`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## Author

    GitHub UserName: ${data.userName}
  
  ${renderLicenseBadge(data.license)}

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
    For additional questions, please contact: ${data.email}

  ${renderLicenseSection(data.license)} 
`;
}

module.exports = generateMarkdown;
