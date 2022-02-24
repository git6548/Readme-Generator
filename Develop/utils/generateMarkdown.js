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
    return `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'BSD 3-Clause License') {
    return ` [![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else { return `` }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return ` [License: MIT](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'GNU GPL v3') {
    return ` [License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === 'Apache') {
    return `[License](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'BSD 3-Clause License') {
    return `[License: BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else { return `` }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //"This project is licensed under the terms of the MIT license."
  if (license === 'MIT') {
    return `"This project is licensed under the terms of the MIT license.`
  }
  else if (license === 'GNU GPL v3') {
    return `This project is licensed under the terms of the GNU GPL v3 license.`
  }
  else if (license === 'Apache') {
    return `This project is licensed under the terms of the Apache license.`
  }
  else if (license === 'BSD 3-Clause License') {
    return `This project is licensed under the terms of the BSD 3-Clause license.`
  }
  else { return `` }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents: 
  
  ### [Description](#description)
  
  ### [Installation](#instalation)
  
  ### [Usage](#usage)
  
  ### [License](#license)
  
  ### [Contributing](#contributing)
  
  ### [Tests](#tests)
  
  ### [Questions](#questions)
  
  ## Description: ${data.description}

  ## Installation: ${data.installation}

  ## Usage: ${data.usage}

  ## License:  ${renderLicenseLink(data.license)} ${renderLicenseSection(data.license)}
  
  ## Contributing: ${data.contributing}
  
  ## Tests: ${data.tests}
  
  ## Questions: [Github Link](github.com/${data.username}) reach out to ${data.email} with any additional questions
`;
}

module.exports = generateMarkdown;


//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions