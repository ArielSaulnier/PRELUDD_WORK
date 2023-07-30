async function sequential(promises) {
    const results = [];
    for (const promiseFunc of promises) {
        try {
            const result = await promiseFunc();
            results.push(result);
        } catch (error) {
            throw error;
        }
    }
    return results;
}
module.exports = sequential;