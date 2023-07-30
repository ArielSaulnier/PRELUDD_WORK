function sleep(ms) {
    return new Promise(resolve => {
        const startTime = Date.now();
        while (Date.now() - startTime < ms) { }
        resolve();
    });
}
module.exports = sleep;