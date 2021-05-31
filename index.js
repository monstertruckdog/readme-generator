// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'list',
        name: 'test_x',
        choices: ['Cubs', 'Astros', 'Brewers', 'Cardinals']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
          console.log(`----ANALYSIS---------------------------------------`)
          console.log(`DATA TYPE OF FROM OBJECT:                                ${typeof data.test_x}\nDATA TYPE OF FROM RAW VALUE:                             ${typeof 'Astros'}`);
          console.log(`FROM OBJECT VALUE:                                       ${data.test_x}\nRAW VALUE:                                               ${'Astros'}`);
          console.log(`Object.is EVAL RESULT:                                   ${Object.is(data.text_x, 'Astros')}`);
          console.log(`PRIMITIVE COMPARISON EVAL RESULT (SUPER STRICT:  === ):  ${data.test_x === 'Astros'}`);
          console.log(`PRIMITIVE COMPARISON EVAL RESULT (MEDIUM STRICT:  == ):  ${data.test_x === 'Astros'}`);
          console.log(`PRIMITIVE COMPARISON EVAL RESULT (LEAST STRICT: = ):     ${data.test_x === 'Astros'}`);
          console.log(`----END ANALYSIS----------------------------------\n`)

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

  // project title
  // description
  // installation instructions
  // usage information
  // contribution guidelines
  // test instructions