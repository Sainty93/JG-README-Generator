// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
        validate: (titleInput) => {
            if (titleInput) {
            return true;
        } else {
            return 'Please select a title.';
             }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description explaining the what, why and how of project. Use the following questions as a guide:\n
        - What was your motivation?
        - Why did you build this project?
        - What problem does it solve?
        - What did you learn?\n',
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    return 'Please select a description.';
                }
            },
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Table of contents',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please provide installation information for the user:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use the project:',
        },
        {
            type: 'list',
            name: 'license',
            massage: 'Please select which license you would liketo use:',
            choices: ['Apache 2.0', 'MIT', 'GNU GPL v3.0', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can developers contribute to your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can this project be tested?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter Github username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address:',
            validate: (questionInput) => {
                return true;
            } else {
                return 'Please provide your github username.';
            }
        },
    },
];



            


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
