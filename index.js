const sleep = require('./01-promise-sleep/sleep.js');
const first = require('./02-promise-first/first.js');

async function main() {
    console.log("Sleep function")
    console.log("Beginning");
    await sleep(2000);
    console.log("End");

    console.log("First function")
    first([() => Promise.resolve(12), () => Promise.resolve(13)]).then(result => console.log(result));
}

main();