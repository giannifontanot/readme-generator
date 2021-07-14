// Required libraries: INQUIRER and FILE SYSTEM
const inquirer = require('inquirer');
const fs = require('fs');

// Begin prompt - Inquirer
inquirer.prompt([
    {
        // Status of the project
        name: "status",
        type: "list",
        message: "What is the status of the project?",
        choices: ["Stable", "Buggy"],
        default: "Stable",
    },
    {
        // Title of the project
        name: "title",
        type: "input",
        message: "Title of your project",
    },
    {
        // License used
        name: "license",
        type: "list",
        message: "Choose the license",
        choices: ["Apache", "BSD", "GPL", "MIT"],
        default: "MIT",
    },
    {
        // Description of the project
        name: "description",
        type: "input",
        message: "A brief description of what this project does and who it's for",
    },
    {
        // Picture used
        name: "picture",
        type: "input",
        message: "insert the name of the picture",
    },
    {
        // Features 1
        name: "feature1",
        type: "input",
        message: "Write feature 1",
    },
    {
        // Features 2
        name: "feature2",
        type: "input",
        message: "Write feature 2",
    },
    {
        // Features 3
        name: "feature3",
        type: "input",
        message: "Write feature 3",
    },
    {
        // Features 4
        name: "feature4",
        type: "input",
        message: "Write feature 4",
    },
    {
        // Name of the GitHub repository
        name: "githubrepo",
        type: "input",
        message: "What is the GitHub repository?",
    }, {
        // Live Link in the GitHub repository
        name: "livelink",
        type: "input",
        message: "What is the Live Link of the project?",
    },
    {
        // Author email
        name: "email",
        type: "input",
        message: "provide the email to get support",
    },
    {
        // GitHub account
        name: "githubaccount",
        type: "input",
        message: "What is your Github account?",
    },
    {
        // LinkedIn account
        name: "linkedinaccount",
        type: "input",
        message: "What is your LinkedIn account?",
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
        case "MIT":
            sReadme += "\n" + "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            break;
        case "BSD":
            sReadme += "\n" + "[![BSD License](https://img.shields.io/badge/License-BSD-green)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case "Apache":
            sReadme += "\n" + "[![Apache License](https://img.shields.io/badge/License-Apache-green)](https://www.apache.org/licenses/LICENSE-2.0)";
            break;
        case "GPL":
            sReadme += "\n" + "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)";
            break;
        default:
            sReadme += "You did not select a license.";
    }
    // Get title
    sReadme += "\n" + "# " + data.title;
    // Get Description
    sReadme += "\n" + data.description;
    // Get the picture
    sReadme += "\n" + "## Demo"
    sReadme += "\n" + "!["+data.picture+"](./" + data.picture + ")";
    // Get 4 features of the project
    sReadme += "\n" + "## Features";
    sReadme += "\n" + "- " + data.feature1;
    sReadme += "\n" + "- " + data.feature2;
    sReadme += "\n" + "- " + data.feature3;
    sReadme += "\n" + "- " + data.feature4;
    // Get GitHub repository
    sReadme += "\n" + "## GitHub Repository";
    sReadme += "\n" + "[https://github.com/" + data.githubaccount + "/" + data.githubrepo+"/](https://github.com/" + data.githubaccount + "/" + data.githubrepo+"/)";
    // Get Live Link
    sReadme += "\n" + "## Live Link";
    sReadme += "\n" + "[https://" + data.githubaccount + ".github.io/" + data.livelink+"](https://" + data.githubaccount + ".github.io/" + data.livelink+")";
    // Get email for Support
    sReadme += "\n" + "## Support";
    sReadme += "\n" + "If you need help with this project, please write to: [" + data.email+"](" + data.email+")";
    // Get Author of the project
    sReadme += "\n" + "## Authors";
    sReadme += "\n" + " - [@"+data.githubaccount+"](https://www.github.com/"+data.githubaccount+")";
    // LinkedIn and GitHub links
    sReadme += "\n" + "## 🔗 Links";
    sReadme += "\n" + "[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/"+data.github+"/)";
    sReadme += "\n" + "[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/"+data.linkedinaccount+"/)";
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
