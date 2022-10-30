// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = '' ;
  if (license === 'MIT') {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license ==='Apache 2.0') {
    badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license ==='ISC License (ISC)') {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else {
    badge = '';
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ''
  if(){

  } else if () {

  } else if () {

  } else {
    link ="";
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Questions](#questions)
  - [License](#license) 

  ## Description
  ${data.Description}

  ## Installation 
  ${data.Installation }

  ## Usage 
  ${data.Usage}

  ## Contribution 
  ${data.Contribution}

  ## Questions 
  -Github: [${data.username}] (https:.//github.com/${data.username})
  -Email: [${data.email}] (Email: ${data.email})

  ## License
  ${data.License}, 
  - ${renderLicenseBadge(data.License)}
`;
}

module.exports = generateMarkdown;
  