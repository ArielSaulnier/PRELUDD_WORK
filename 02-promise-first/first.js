function first(functions) {
    // functions is a list of Function that all return a Promise
    return new Promise((resolve, reject) => {
        let completed = false;

        functions.forEach(func => {
            func()
                .then(result => {
                    if (!completed) {
                        completed = true;
                        resolve(result);
                    }
                })
                .catch(error => {
                    if (!completed) {
                        completed = true;
                        reject(error);
                    }
                });
        });
    });
}

module.exports = first;