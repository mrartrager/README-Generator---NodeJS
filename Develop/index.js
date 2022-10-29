// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown= require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want the title of your README to be?",
  },
  {
    type: "input",
    name: "Description",
    message: "What do you want to say about the description?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What do you want to say about the Installation",
  },
  {
    type: "input",
    name: "Usage",
    message: "How do you use this?",
  },
  {
    type: "list",
    name: "License",
    message: "what License would you like?",
    choices: ["MIT", "Apache 2.0 License", "ISC License (ISC)"],
  },
  {
    type: "input",
    name: "Contribution",
    message: "Where there any contibutors on this project?",
  },
  {
    type: "input",
    name: "Test",
    message: "What are the test instructions for this project?",
  },
  {
    type:'input',
    message:'Add your GitHub username',
    name:'username',
  },
  {
    type:'input',
    message:'Add your contact email address',
    name:'email',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), 
    (err) => err ? console.log(err) : console.log('README SUCCESSFULLY CREATED!')
);
}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      const fileName = 'README.md';
      writeToFile(fileName,data)
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
