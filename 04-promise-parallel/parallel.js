function parallel(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;
        let isRejected = false;

        function handleResult(index, result) {
            if (!isRejected) {
                results[index] = result;
                completedCount++;

                if (completedCount === functions.length) {
                    resolve(results);
                }
            }
        }

        function handleError(error) {
            if (!isRejected) {
                isRejected = true;
                reject(error);
            }
        }

        for (let i = 0; i < functions.length; i++) {
            Promise.resolve(functions[i]())
                .then(result => handleResult(i, result))
                .catch(error => handleError(error));
        }
    });
}
module.exports = parallel;