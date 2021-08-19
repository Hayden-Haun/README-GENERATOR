// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

const generateMarkdown = require("./utils.generateMarkdown.js");

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
  },
  {
    type: "input",
    message: "What is the project name?",
    name: "title",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project",
  },
  {
    type: "list",
    name: "liscense",
    message: "What kind of license does your project user?",
    choices: ["MIT", "Option2", "Option3", "Option4"],
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependencies?",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
  },
  {
    type: "input",
    name: "contributon",
    message: "How does a user contribute to this project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  //present the user with questions
  inquirer.prompt(questions).then((data) => {
    // console.log(data);
    //

    fs.writeFile("README.md", JSON.stringify(data), (err) => {
      err
        ? console.log(err)
        : console.log("Success - File was written!! See README.md");
    });
  });
}

// Function call to initialize app
init();
