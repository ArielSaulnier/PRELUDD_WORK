const sleep = require('./01-promise-sleep/sleep');
const first = require('./02-promise-first/first');
const sequential = require('./03-promise-sequential/sequential');
const parallel = require('./04-promise-parallel/parallel');

describe('sleep', () => {
    test('should sleep for the given time', async () => {
        const startTime = Date.now();
        const sleepTime = 1000; // 1 second

        await sleep(sleepTime);

        const endTime = Date.now();
        const elapsedTime = endTime - startTime;

        expect(elapsedTime).toBeGreaterThanOrEqual(sleepTime);
    });
});

describe('first', () => {
    test('should resolve with the result of the first function that resolves', async () => {
        const func1 = () => new Promise(resolve => setTimeout(() => resolve('Result 1'), 500));
        const func2 = () => new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));
        const func3 = () => new Promise(resolve => setTimeout(() => resolve('Result 3'), 1500));

        const result = await first([func1, func2, func3]);

        expect(result).toBe('Result 1');
    });

    test('should reject if all functions reject', async () => {
        const func1 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error 1'), 500));
        const func2 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error 2'), 1000));
        const func3 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error 3'), 1500));

        try {
            await first([func1, func2, func3]);
        } catch (error) {
            expect(error).toBe('Error 1');
        }
    });
});

describe('sequential', () => {
    test('should resolve with an array of results in sequence', async () => {
        const func1 = () => new Promise(resolve => setTimeout(() => resolve('Result 1'), 500));
        const func2 = () => new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));
        const func3 = () => new Promise(resolve => setTimeout(() => resolve('Result 3'), 1500));

        const results = await sequential([func1, func2, func3]);

        expect(results).toEqual(['Result 1', 'Result 2', 'Result 3']);
    });

    test('should reject if any function rejects', async () => {
        const func1 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error 1'), 500));
        const func2 = () => new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));
        const func3 = () => new Promise(resolve => setTimeout(() => resolve('Result 3'), 1500));

        try {
            await sequential([func1, func2, func3]);
        } catch (error) {
            expect(error).toBe('Error 1');
        }
    });
});

describe('parallel', () => {
    test('should resolve with an array of results in parallel', async () => {
        const func1 = () => new Promise(resolve => setTimeout(() => resolve('Result 1'), 500));
        const func2 = () => new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));
        const func3 = () => new Promise(resolve => setTimeout(() => resolve('Result 3'), 1500));

        const results = await parallel([func1, func2, func3]);

        expect(results).toEqual(['Result 1', 'Result 2', 'Result 3']);
    });

    test('should reject if any function rejects', async () => {
        const func1 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error 1'), 500));
        const func2 = () => new Promise(resolve => setTimeout(() => resolve('Result 2'), 1000));
        const func3 = () => new Promise(resolve => setTimeout(() => resolve('Result 3'), 1500));

        try {
            await parallel([func1, func2, func3]);
        } catch (error) {
            expect(error).toBe('Error 1');
        }
    });
});
