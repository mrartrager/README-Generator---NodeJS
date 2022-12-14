
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

function renderLicenseLink(license) {
  let link = ''
  if(license === 'MIT'){
    link = "https://opensource.org/licenses/MIT"
  } else if (license ==='Apache 2.0') {
    link = "https://opensource.org/licenses/Apache-2.0"
  } else if (license ==='ISC License (ISC)') {
    link = "https://opensource.org/licenses/ISC"
  } else {
    link ="";
  }
  return link
}


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
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## Contribution 
  ${data.Contribution}

  ## Questions 
  - Github: [${data.username}] (https://github.com/${data.username})
  - Email: [${data.email}] (Email: ${data.email})

  ## License
  ${data.License}, 
  - ${renderLicenseBadge(data.License)}
  
`;
}

module.exports = generateMarkdown;
  