const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want the title of your README to be?",
  },
  {
    type: "input",
    name: "Description",
    message: "What do you want to say about this project?",
  },
  {
    type: "input",
    name: "Installation",
    message: "Do you want to say anything about the Installation",
  },
  {
    type: "input",
    name: "Usage",
    message: "How would you use this?",
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
    message: "Where there any other contibutors on this project?",
  },
  {
    type: "input",
    name: "Test",
    message: "What do you want to say about Testing this project?",
  },
  {
    type: "input",
    message: "Add your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "Add your contact email address",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.error(err) : console.log("README file has been succesfully ")
  );
}


function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers); 
      const markDown = generateMarkdown(answers);
      writeToFile("README.md", markDown);
    })
    .catch((error) => {
      console.log(error);
    });
}


init();
