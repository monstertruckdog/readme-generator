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
      message: 'Enter instructions or exmaples on how the project can be used'
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
      type: 'checkbox',
      name: 'badge',
      message: 'Select all applicable licesnses for your project',
      choices: ['CC-BY-SA-4.0', 'Apache Licesnse 2.0', 'GNU GPLv3', 'ISC', 'MIT License', 'None / Not Applicable']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        const filename = 'README.md';

        if (data.test_x === 'Astros') {
          console.log(`----IF...THEN SECTION----------------------------`);
          console.log(`FROM OBJECT VALUE (inside if...then):  ${data.test_x}`);
          console.log(`${data.text_x} WAS YOUR CHOICE`);
          fs.appendFile(filename, `perhaps this worked`,
          (err) =>
            err ? console.log(err) : console.log(`Your README file has now been successfully generated!`)
          );
          console.log(`----END IF...THEN SECTION-----------------------\n`);
          } else {
            console.log(`----ELSE SECTION----------------------------`);
            console.log(`FROM OBJECT VALUE (inside else):  ${data.test_x}`);
            console.log(`THIS DID NOT WORK`);
            console.log(`----END ELSE SECTION----------------------------\n`);
          }
      })
}

// Function call to initialize app
init();


/*
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  */

