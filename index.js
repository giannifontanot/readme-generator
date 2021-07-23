// Required libraries: INQUIRER and FILE SYSTEM
const inquirer = require('inquirer');
const fs = require('fs');
const tools = require('./lib/tools');
const chalk = require("chalk");

//Paint the screen
tools.clearPage();
// Begin prompt - Inquirer
inquirer.prompt([
    {
        // Status of the project
        name: "status",
        type: "list",
        message: "What is the status of the project?",
        choices: ["Stable", "Buggy"],
        default: "Stable",
        validate: (status) => {
            return true;
        },
    },
    {
        // Title of the project
        name: "title",
        type: "input",
        message: "Title of your project:",
        validate: (title) => {
            if (title.toString().length <= 0) {
                return "Title cannot be empty.";
            } else {
                return true;
            }
        },
    },
    {
        // License used
        name: "license",
        type: "list",
        message: "Choose the license:",
        choices: ["Apache License 2.0 ", "GNU AGPLv3", "GNU GPLv3", "GNU GPLv2","MIT License","Mozilla Public License 2.0", "Boost Software License 1.0", "SIL Open Font License 1.1", "ISC License"],
        default: "MIT License",
        loop: false,
        validate: (license) => {
            return true;
        },
    },
    {
        // Description of the project
        name: "description",
        type: "input",
        message: "Provide a brief description of this project: your motivation, problem it solves, and what did you learn?",
        validate: (description) => {
            if (description.toString().length <= 0) {
                return "Description cannot be empty.";
            } else {
                return true;
            }
        },
    },
    {
        // Features 1
        name: "feature1",
        type: "input",
        message: "Write feature 1",
        validate: (feature1) => {
            if (feature1.toString().length <= 0) {
                return "Please provide a feature:";
            } else {
                return true;
            }
        },
    },
    {
        // Features 2
        name: "feature2",
        type: "input",
        message: "Write feature 2",
        validate: (feature2) => {
            if (feature2.toString().length <= 0) {
                return "Please provide a feature:";
            } else {
                return true;
            }
        },
    },
    {
        // Features 3
        name: "feature3",
        type: "input",
        message: "Write feature 3",
        validate: (feature3) => {
            if (feature3.toString().length <= 0) {
                return "Please provide a feature:";
            } else {
                return true;
            }
        },
    },
    {
        // Features 4
        name: "feature4",
        type: "input",
        message: "Write feature 4",
        validate: (feature4) => {
            if (feature4.toString().length <= 0) {
                return "Please provide a feature:";
            } else {
                return true;
            }
        },
    },
    {
        // installation
        name: "installation",
        type: "input",
        message: "What are the steps required to install your project?",
        validate: (installation) => {
            if (installation.toString().length <= 0) {
                return "Please provide a description:";
            } else {
                return true;
            }
        },
    },
    {
        // Usage
        name: "usage",
        type: "usage",
        message: "Provide instructions and examples for use.",
        validate: (usage) => {
            if (usage.toString().length <= 0) {
                return "Please provide some instructions:";
            } else {
                return true;
            }
        },
    },
    {
        // Picture used
        name: "picture",
        type: "input",
        message: "insert the name of the picture",
        validate: (picture) => {
            if (picture.toString().length <= 0) {
                return "Please provide a picture:";
            } else {
                return true;
            }
        },
    },
    {
        // Credits
        name: "credits",
        type: "input",
        message: "List your collaborators, third-party assets, or tutorials used. To create a list write ' - '",
        validate: (picture) => {
            if (picture.toString().length <= 0) {
                return "Please provide a picture.";
            } else {
                return true;
            }
        },
    },
    {
        // GitHub account
        name: "githubaccount",
        type: "input",
        message: "What is your Github account? " + chalk.yellow("https://github.com/") + " + ",
        validate: (githubaccount) => {
            if (githubaccount.toString().length <= 0) {
                return "Please provide a GitHub account.";
            } else {
                return true;
            }
        },
    },
    {
        // Name of the GitHub repository
        name: "githubrepo",
        type: "input",
        message: "What is the GitHub repository? "+ chalk.yellow(`https://github.com/your-account-here/ + `)  ,
        validate: (githubrepo) => {
            if (githubrepo.toString().length <= 0) {
                return "Please provide a GitHub repository for the project/";
            } else {
                return true;
            }
        },
    }, {
        // Live Link in the GitHub repository
        name: "livelink",
        type: "input",
        message: "What is the Live Link of the project? " + chalk.yellow(`https://your-account-here.github.io/`) + " + ",
        validate: (livelink) => {
            if (livelink.toString().length <= 0) {
                return "Please provide a live link for the project.";
            } else {
                return true;
            }
        },
    },
    {
        // Author email
        name: "email",
        type: "input",
        message: "Provide the email to get support: ",
        validate: (email) => {
            if (email.toString().length <= 0) {
                return "Please provide an email account.";
            } else {
                return true;
            }
        },
    },
    {
        // LinkedIn account
        name: "linkedinaccount",
        type: "input",
        message: "What is your LinkedIn account?",
        validate: (linkedinaccount) => {
            if (linkedinaccount.toString().length <= 0) {
                return "Please provide a LinkedIn account.";
            } else {
                return true;
            }
        },
    },
]).then(data => {
    // Empty string variable to gather all the data
    let sReadme = "";
    // Get the correct link for STATUS
    switch (data.status) {
        case "Stable":
            sReadme += "\n" + "![Status Stable](https://img.shields.io/badge/Status-Stable-blue)";
            break;
        case "Buggy":
            sReadme += "\n" + "![Status Buggy](https://img.shields.io/badge/Status-Buggy-red)";
    }

    // Get the correct link for LICENSE
    switch (data.license) {
        case "Apache License 2.0":
            sReadme += "\n" + "[![Apache License 2.0](https://img.shields.io/badge/license-Apache-blue)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "GNU AGPLv3":
            sReadme += "\n" + "[![GNU" +
                " AGPLv3](https://img.shields.io/badge/License-GNU%20AGPLv3-yellow)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "GNU GPLv3":
            sReadme += "\n" + "[![GNU GPLv3](https://img.shields.io/badge/License-GNU%20AGPLv3-green)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "GNU GPLv2":
            sReadme += "\n" + "[![GNU" +
                " GPLv2](https://img.shields.io/badge/License-GNU%20GPLv2-brightgreen)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "MIT License":
            sReadme += "\n" + "[![MIT" +
                " License](https://img.shields.io/badge/License-MIT%20License-blue)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "Mozilla Public License 2.0":
            sReadme += "\n" + "[![Mozilla Public License" +
                " 2.0](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-orange)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "Boost Software License 1.0":
            sReadme += "\n" + "[![Boost Software License" +
                " 1.0](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-blue)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "SIL Open Font License 1.1":
            sReadme += "\n" + "[![SIL Open Font License" +
                " 1.1](https://img.shields.io/badge/License-SIL%20Open%20Font%20License%201.1-green)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "ISC License":
            sReadme += "\n" + "[![ISC" +
                " License](https://img.shields.io/badge/License-ISC%20License-yellowgreen)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        default:
            sReadme += "You did not select a license.";
    }
    // Get title
    sReadme += "\n" + "# " + data.title;
    // Get Description
    sReadme += "\n" + data.description;
    // Table of Contents
    sReadme += "\n" + "## Table of Contents"
    // ---------------------------------------------------
    // Installation
    sReadme += "\n" + "## Installation"
    sReadme += "\n" + data.installation;
    // Usage
    sReadme += "\n" + "## Usage"
    sReadme += "\n" + data.usage;
    sReadme += "\n" + "![" + data.picture + "](" + data.picture + ")";
    // Credits
    sReadme += "\n" + "## Credits"
    sReadme += "\n" + data.credits;
    // Get 4 features of the project
    sReadme += "\n" + "## Features";
    sReadme += "\n" + "````````````````````````";
    sReadme += "\n" + "- " + data.feature1;
    sReadme += "\n" + "- " + data.feature2;
    sReadme += "\n" + "- " + data.feature3;
    sReadme += "\n" + "- " + data.feature4;
    sReadme += "\n" + "````````````````````````";
    // Contribute
    sReadme += "\n" + "## Contributions"
    sReadme += "\n" + "If you would like to contribute to this project , you are very welcome! You can fork it and " +
        "later submit a pull request. ";
    sReadme += "\n" + "In case you need them, here are some guidelines: [Contributor" +
        " Covenant](https://www.contributor-covenant.org/)";
    // Get GitHub repository
    sReadme += "\n" + "# 🔗 Links";
    sReadme += "\n" + "### GitHub Repository";
    sReadme += "\n" + "[https://github.com/" + data.githubaccount + "/" + data.githubrepo + "/](https://github.com/" + data.githubaccount + "/" + data.githubrepo + "/)";
    // Get Live Link
    sReadme += "\n" + "### Live Link";
    sReadme += "\n" + "[https://" + data.githubaccount + ".github.io/" + data.livelink + "](https://" + data.githubaccount + ".github.io/" + data.livelink + ")";
    // Get email for Support
    sReadme += "\n" + "### Support";
    sReadme += "\n" + "If you need help with this project, please write to: [" + data.email + "](https://mailto:" + data.email + ")";
    // Get Author of the project
    sReadme += "\n" + "### Authors";
    sReadme += "\n" + " - [@" + data.githubaccount + "](https://www.github.com/" + data.githubaccount + ")";
    // LinkedIn and GitHub links
    sReadme += "\n" + "[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://" + data.githubaccount + ".github.io/portfolio/)";
    sReadme += "\n" + "[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/" + data.linkedinaccount + "/)";
    // We write the results
    writeReadmeFile(sReadme);
});

// Write Callback Function
function callbackWriteFile(err) {
    err ? console.log(err) : console.log('success');
}

// We write the results
function writeReadmeFile(pText) {
    // Name of the file is always README.md
    const filename = "./README.md";
    fs.writeFile(filename, pText, callbackWriteFile);
}
