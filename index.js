//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

//Link generateMarkdown file with functions to create README.md
const generateMarkdown = require("./utils/generateMarkdown.js");

//This array of questions
const questions = [
  {
    type: "input",
    message: "What is the project name?",
    name: "project",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
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
    name: "description",
    message: "Give a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Please specify usage information for this project:",
    default: "npm index.js",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project use?",
    choices: [
      "GNU_AGPLv3",
      "GNU_GPLv3",
      "GNU_LGPLv3",
      "Mozilla_Public_License_2.0",
      "Apache_License_2.0",
      "MIT_License",
      "Boost_Software_License_1.0",
      "None",
    ],
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
  {
    type: "input",
    name: "technologies",
    message: "What technologies were used?",
  },
  {
    type: "input",
    name: "credits",
    message: "Provide information for credits. Who worked on this project?",
  },
];

// This function writes the newREADME.md with the data collected from the user
function writeToFile(data) {
  fs.writeFile("newREADME.md", data, (err) => {
    err ? console.log(err) : console.log("Complete! Please see newREADME.md");
  });
}

// Create a function to initialize the application. Prompts user with question array, collects data, and passes it into the writeToFile function
function init() {
  //present the user with questions
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile(markdown);
  });
}

// Function call to initialize app
init();
