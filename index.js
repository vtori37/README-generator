// TODO: Include packages needed for this application
const fs = require('fs');
const {writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer')
// const generate = require ('./src/README.md')
// TODO: Create an array of questions for user input

const init = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of the project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief and detailed description of your project."
    },
    {
      type: 'input',
      name: 'tableOfContents' ,
      message:'Please list the different sections for your Table of Contents.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please detail the step by step process of how to installing your project.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe the ways that this project can be utilized.',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please select the license(s) used from the following list.',
      choices: ['MIT license', '', '', '', '']
    },
    {
      type: 'confirm',
      name: 'contributing',
      message: 'Would you like enter individuals who have contirbtued to this project?',
      default: false
    },
    ])
    .then(userAnswers => {

    });
    };


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app


// Function call to initialize app
init();



// // TODO: Include packages needed for this application
// const fs = require("fs");
// const inquirer = require("inquirer");
// // const {writeFile}
// // const inquirer = require("")

// // TODO: Create an array of questions for user input
// // application repo info should ask: title of project, sections, entitled description,
// // Table of contents, Installation
// // usage, license (badges) , contributors, contribution guidelines, tests, and questions
// const questions = [
// return inquirer.prompt([

//   type
// ])
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
