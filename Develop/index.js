// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    choices: ["MIT", "Mozilla Public License 2.0", "Microsoft Public License"],
  },
  {
    type: "input",
    name: "Contribution",
    message: "Where there any contibutors on this project?",
  },
  {
    type: "input",
    name: "Test",
    message: " ",
  },
  {
    type: "input",
    name: "Questions",
    message: "What is your Github User name?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      return answers;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();