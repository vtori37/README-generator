// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if license is equal to none, return empty string
  //else
  return `![${license} Badge](https://img.shields.io/badge/License-${license}-green)`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
return ``
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
***

## Description
${data.description}

## Table of Contents 
* [Website](#website)
* [Contributors](#contributors)
* [Credits](#credits)

## Website
Here is a link to the live website:
[${data.title}](${data.websiteLink})

## Installation 
${data.installation}

## Usage
${data.usage}

## Test
Here is a demonstration of the application.
${data.test}

## Contributors
${data.contributors || ""}

### Questions
If you have any questions or concerns regarding this project, feel free to reach out to ${data.author} at ${data.contact}
## Credits
* HTML5
* CSS 
* JS
--- 

`;
}

module.exports = generateMarkdown;
