const boss = require("./lib/boss");
const architect = require("./lib/architect");
const trainee = require("./lib/trainee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "us.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

function appMenu() {

    function createboss() {
        console.log("Please build your team");
        inquirer.prompt([{
                type: "input",
                name: "bossName",
                message: "What is the team boss's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "bossId",
                message: "What is the team boss's id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "bossEmail",
                message: "What is the team boss's email?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "bossOfficeNumber",
                message: "What is the team boss's office number?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            }
        ]).then(answers => {
            const boss = new boss(answers.bossName, answers.bossId, answers.bossEmail, answers.bossOfficeNumber);
            teamMembers.push(boss);
            idArray.push(answers.bossId);
            createTeam();
        });
    }

    function createTeam() {

        inquirer.prompt([{
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "architect",
                "trainee",
                "I don't want to add any more team members"
            ]
        }]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "architect":
                    addarchitect();
                    break;
                case "trainee":
                    addtrainee();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    function addarchitect() {
        inquirer.prompt([{
                type: "input",
                name: "architectName",
                message: "What is your architect's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "architectId",
                message: "What is your architect's id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID is already taken. Please enter a different number.";
                        } else {
                            return true;
                        }

                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "architectEmail",
                message: "What is your architect's email?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "architectGithub",
                message: "What is your architect's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const architect = new architect(answers.architectName, answers.architectId, answers.architectEmail, answers.architectGithub);
            teamMembers.push(architect);
            idArray.push(answers.architectId);
            createTeam();
        });
    }

    function addtrainee() {
        inquirer.prompt([{
                type: "input",
                name: "traineeName",
                message: "What is your trainee's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "traineeId",
                message: "What is your trainee's id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID is already taken. Please enter a different number.";
                        } else {
                            return true;
                        }

                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "traineeEmail",
                message: "What is your trainee's email?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "traineeSchool",
                message: "What is your trainee's school?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const trainee = new trainee(answers.traineeName, answers.traineeId, answers.traineeEmail, answers.traineeSchool);
            teamMembers.push(trainee);
            idArray.push(answers.traineeId);
            createTeam();
        });
    }

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createboss();

}