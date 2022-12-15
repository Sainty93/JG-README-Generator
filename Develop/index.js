// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'What is the title?',
        validate: (titleInput) => titleInput
        {
        if (titleInput) {
            return true;
        } else {
            return 'Please select a title.';
        }

        },
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();