const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for the user to input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          return 'Please input a project title.';
        }
    },
},
{
  type: 'input',
  name: 'description',
  message: 'Please provide a short desciption of your project:',
  validate: (descInput) => {
    if (descInput) {
      return true;
    } else {
      return 'Please input a project description.';
    }
      },
    },
    {
      type: 'input',
      name: 'table of contents',
      message: 'Table of Contents:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for the user:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select which license you would like to use:',
      choices: ['Apache 2.0', 'MIT ', 'GNU GPL v3.0', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can fellow developers contribute to your project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How can test be run for this project?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter Github username for any inquiries about the project:',
      validate: (questionInput) => {
        if (questionInput) {
          return true;
        } else {
          return 'Please provide your github username.';
        }
      },
    ];
      
      
        
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (error) => {
    console.log(filename, data);
    if (error) throw error;
    console.log('Your README file has been generated');
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('README.md', generateMarkdown(data));
    console.log(data);
  });
}


init();
