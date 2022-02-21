// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return ` [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'GNU GPL v3') {
    return ` [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
    else if (license === 'Apache') {
    `return [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
      else if (license === 'BSD 3-Clause License') {
    `return
   [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`}
        else { `return ''` }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ## Description: ${data.description}
 
  ## Table of Contents: 

  ### [Description](#Description)
 
  ### [Installation](#Instalation)
 
  ### [Usage](#Usage)
 
  ### [License](#License)
  
  ### [Contributing](#Contributing)

  ### [Tests](#Tests)
  
  ### [Questions](#Questions)
 
  ## Installation: ${data.installation}

  ## Usage: ${data.usage}
 
  ## License:
  
  ## Contributing: ${data.contributing}
  
  ## Tests: ${data.tests}
  
  ## Questions: [Github Link](github.com/${data.username}) reach out to ${data.email} with any additional questions
`;
}

module.exports = generateMarkdown;


//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions