const TestConsole = require("./testConsole");
const promiseReduce = require("./promiseReduce");

describe('promiseReduce', function () {

    it('test1', () => {
        const testConsole = new TestConsole();
        // first async function
        const fn1 = () => {
            testConsole.log('fn1');
            return Promise.resolve(1)
        };

        // second async function
        const fn2 = () => new Promise(resolve => {
            testConsole.log('fn2');
            setTimeout(() => resolve(2), 1000)
        });

        // third async function
        const fn3 = () => new Promise(resolve => {
            testConsole.log('fn3');
            setTimeout(() => resolve(5), 1000)
        });

        return promiseReduce([fn1, fn2, fn3],
            function (memo, value) {
                testConsole.log('reduce');
                return memo * value;
            },
            1
        )
            .then(testConsole.log)
            .then(() => {
                const resultLog = testConsole.result();
                expect(resultLog).toEqual([
                    'fn1',
                    'reduce',
                    'fn2',
                    'reduce',
                    'fn3',
                    'reduce',
                    '10',
                ].join('\n'));
            })
    });
});


