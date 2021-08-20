// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

//add default values if nothing is chosen -ADD LATER
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: function (input) {
      let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      return emailRegex.test(input) || "Please enter a valid email";
    },
  },
  {
    type: "input",
    message: "What is the project name?",
    name: "project",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project",
  },
  {
    type: "list",
    name: "liscense",
    message: "What kind of license does your project use?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      ,
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "contributon",
    message: "How does a user contribute to this project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", data, (err) => {
    err
      ? console.log(err)
      : console.log("Success - File was written!! See README.md");
  });
}

// TODO: Create a function to initialize app
function init() {
  //present the user with questions
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile(markdown);
  });
}

// Function call to initialize app
init();

//--------tutor session.
//npmjs
//view documentation

//npm init
//npm install in inquirer
