// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if license is equal to none, return empty string
  //else
  if (data.license == "other"){
    return `![${data.otherLicense} Badge](https://img.shields.io/badge/License-${data.otherLicense}-yellowgreen)`
      } else {
  return `![${license} Badge](https://img.shields.io/badge/License-${license}-green)`
      }
  
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if 
  return 

}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'MIT') {
    return `
    
  https://opensource.org/licenses/MIT
 
  Copyright © <years> <copyright holder>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  `

  
  }
  if(data.license == "none" || '' ) {
    return ""
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents 
* [Website](#Website)
* [Installation](#Installation)
* [Usage](#Usage)
* [Test](#Test)
* [Contributors](#contributors)
* [Credits](#credits)
* [Questions](#Questions)

***

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

## Credits
* HTML5
* CSS 
* JS

${}
${renderLicenseBadge(data.license)}


### Questions
If you have any questions or concerns regarding this project, feel free to reach out to ${data.author} at ${data.contact}
--- 

`;
}

module.exports = generateMarkdown;





`
  apache 2
  Copyright 2022 [name of copyright owner]

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  `
  `
  GPLv2
  Copyright (C) 2022  name of author

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA. 

  `
    `