const sleep = require('./01-promise-sleep/sleep.js');

async function main() {
    console.log("Sleep function")
    console.log("Beginning");
    await sleep(2000);
    console.log("End");
}

main();