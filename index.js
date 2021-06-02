// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'Enter your github username'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address'
    },
    {
      type: 'input',
      name: 'projectname',
      message: 'Enter the name of your project'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter instructions on how to install your project'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter instructions or examples on how the project can be utilized'
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter information on how people can contribute to the project'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter instructions and guidelines for testing project elements'
    },
    {
      type: 'list',
      name: 'badge',
      message: 'Select all applicable licesnses for your project',
      choices: ['CC-BY-SA-4.0', 'Apache License 2.0', 'GNU GPLv3', 'ISC', 'MIT License', 'None / Not Applicable']
    }
];

// TODO: Create a function to write README file
function writeToFile(readMeContent) {
  fs.writeFile('./output/README.md', readMeContent, (err) =>
    err ? console.error(err) : console.log('Congratulations!\nYour README file has been generated successfully'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        const readMeContent = generateMarkdown(data).trim();
        writeToFile(readMeContent)
      });
}

// Function call to initialize app
init();