# Promise Sequential

The goal is to implement a NodeJS function that returns a promise which resolves (or rejects) when *all* of the given functions (given as its arguments) which all return promises, resolve or reject. It has to invoke sequentially the promises.

The `sequential` function takes a single argument: a list of Function. All of these functions return a promise.

Do not use already existing NodeJS methods that does the job!

```javascript
    function sequential(functions) {
        // functions is a list of Function that all return a Promise
        // TODO
    }

    // Il me semble qu'il y a une coquille ici et que c'est la fonction sequential() qui doit être testée :)
    parallel([ () => Promise.resolve(12), () => Promise.resolve(13) ]);
    // Should invoke the first promise, and only once it resolves, it should invoke the second promise
```