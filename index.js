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
    message: 'What is the name of this project? (Required)',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project'
},
// {
//     type: 'list',
//     name: 'license',
//     message: 'Which license do you want to use?',
//     choices: ['MIT', 'GPLv2', 'Apache', 'none'],
// },
{
    type: 'input',
    name: 'usage',
    message: 'How do you use the app?',

},
{

}


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
