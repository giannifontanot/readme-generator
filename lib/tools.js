/**
 *
 * Methods to paint in screen
 */
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');


module.exports = {
    /**
     * Resets screen
     */
    clearPage: () => {
        clear();

        console.log(
            chalk.red(
                figlet.textSync('README Generator', {
                    horizontalLayout: 'full'
                })
            )
        );

    },
};