// TODO: Include packages needed for this application
const fs = require('fs');
// const {writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
// const generate = require ('./src/README.md')
// TODO: Create an array of questions for user input

const promptUser = [
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief and detailed description of your project."
    },
    {
      type: 'input',
      name: 'websiteLink' ,
      message:'Please insert the link to the website.',
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
      choices: ['MIT', 'Apache-2', 'GPLv2', 'other', 'none'],      
    },
    {
      type: 'confirm',
      name: 'choiceOther',
      message: 'Do you have a license not listed above?',
      default: false
    },
    {
      type: 'input',
      name: 'otherLicense',
      message: 'Please type the license.',
      when: ({choiceOther}) => choiceOther,
    },
    // {
    //   type: 'checkbox',
    //   name: 'technology',
    //   message: 'Please select the technology used from the following list.',
    //   choices: ['* HTML 5', '* JavaScript', ' CSS'],      
    // },
    // {
    //   type: 'confirm',
    //   name: 'techConfirm',
    //   message: 'Would you like enter in more technology?',
    //   default: false
    // },
    // {
    //   type: 'input',
    //   name: 'moreTech',
    //   message: 'Please insert additional Technology.',
    //   when: ({techConfirm}) => techConfirm,
    // },
    {
      type: 'confirm',
      name: 'contributorConfirm',
      message: 'Would you like enter individuals who have contributed to this project?',
      default: true
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Please insert contributors.',
      when: ({contributorConfirm}) => contributorConfirm,
    },
    {
      type: 'input',
      name: 'author',
      message: 'Please insert author name.',
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Insert your email.',
    },
    ];
    
    
    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
      return fs.writeFileSync(path.join(process.cwd(), fileName),data);
    }
    
    // TODO: Create a function to initialize app
    //data is user responses
    function init() {
      inquirer
      .prompt(promptUser)
      .then(data => {
        console.log('generateREADME');
        writeToFile("README.md", generateMarkdown(data));
      })      
}

// Function call to initialize app
init();




