const sleep = require('./01-promise-sleep/sleep.js');
const first = require('./02-promise-first/first.js');
const sequential = require('./03-promise-sequential/sequential.js');
const parallel = require('./04-promise-parallel/parallel.js');

async function main() {
    console.log("Sleep function")
    console.log("Beginning");
    await sleep(2000);
    console.log("End");

    console.log("First function");
    first([() => Promise.resolve(12), () => Promise.resolve(13)]).then(result => console.log(result));

    console.log("Sequential Function");
    sequential([() => Promise.resolve(12), () => Promise.resolve(13)])
        .then(results => console.log(results))
        .catch(error => console.error(error));

    console.log("Parallel Function");
    parallel([() => Promise.resolve(12), () => Promise.resolve(13)])
        .then(result => console.log(result))
        .catch(error => console.error(error));
}

main();