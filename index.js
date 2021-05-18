// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
    //description, installation instructions, usage information, contribution guidelines, and test instructions

    {
    type: 'input',
    name: 'title',
    message: 'What is the name of this project?(Required)',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true
        } else {
            console.log('Desctibe your project')
            return false
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'How do others install your project?',
    validate: installationInput => {
        if (installationInput) {
            return true 
        } else {
            console.log('How do others install your project?')
            return false
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples on how to use your application',
    validate: usageInput => {
        if (usageInput) {
            return true
        } else {
            console.log('Please provide instructions and examples on how to use your application')
            return false
        }
    }

},
{
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this application?'
},
{
    type: 'input',
    name: 'tests',
    message: 'Write tests for your application, then provide examples on how to run them.'
},
{
    type: 'list',
    name: 'license',
    message: 'Which license do you want to use?',
    choices: ['Apache 2.0', 'Boost'],
},
{
    type: 'input',
    name: 'github',
    message: 'Insert your github username',

},
{
    type: 'input',
    name: 'email',
    message: 'Insert your email address'
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
