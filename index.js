// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt ([
{
    type: "input",
    message: "What is the title of your project?",
    name: "project"
},
{
    type: "input",
    message: "Enter a description of your project",
    name: "description"    
},
{
    type: "input",
    message: "Enter installation instructions for your project",
    name: "installation"    
},
{
    type: "input",
    message: "Enter usage information for your project",
    name: "usage"    
},
{
    type: "input",
    message: "Enter contribution guidelines for your project",
    name: "contributing"    
},
{
    type: "input",
    message: "Enter test instructions for your project",
    name: "tests"    
},
// use https://shields.io/category/license or https://gist.github.com/qvil/5e3ed56c26d784e51424621119cc4028 for badges
{
    type: "list",
    message: "Choose a license for your application",
    name: "license",
    choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None']
},
{
    type: "input",
    message: "Enter your Github Username",
    name: "username"
},
{
    type: "input",
    message: "Enter your email address",
    name: "email"
}
])
.then(questions => writeToFile('./README.md', generateMarkdown(questions)));
//.then(writeToFile('./README.md', questions));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
