const promiseReduce = async (asyncFunctions, reduce, initialValue) => {
        for(let asyncFn of asyncFunctions) {
            initialValue = reduce(await asyncFn(), initialValue);
        }
        return initialValue;
}

module.exports = promiseReduce;