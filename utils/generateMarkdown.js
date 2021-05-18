// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
const licenses = [
  {
    name: "Apache 2.0",
    badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    url: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "Boost",
    badge: "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
    url: "https://www.boost.org/LICENSE_1_0.txt",
  },
]

for (i = 0; i < licenses.length; i++) {
  if (licenses[i].name === license) {
    return `[![License](${licenses[i].badge})](${licenses[i].url})`
    }
  }
}
`
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
`${renderLicenseBadge(data.license)}

# ${data.title}

## Description
${data.description}

## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
* ${data.github}
* ${data.email}

## License
${renderLicenseSection(data.license)}

`);
}

module.exports = generateMarkdown;
