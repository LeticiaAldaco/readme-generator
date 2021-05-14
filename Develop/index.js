// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    //description, installation instructions, usage information, contribution guidelines, and test instructions
{
    type: 'input',
    name: 'title',
    message: 'What is the name of this project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe the use of your project',
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
console.log(answers.title, answers.description);
    })
}

// Function call to initialize app
init();
