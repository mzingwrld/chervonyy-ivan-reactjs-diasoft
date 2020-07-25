const infiniteCurry = (func) => {

    const handleCallReduce = (args) => 
        args.reduce((acc, a) => {
            return func.call(func, acc, a);
        });

    const next = (...args) => {
        return (...x) => {
        //console.log("#### x", x);
        //console.log("#### args", args);
        if (!x.length) {
            if (args.length === 0) {
                return undefined;
            } else {
                //console.log("#### call recudeValue");
                return handleCallReduce(args);
            }   
        }
        //console.log("#### call next(...args, reduceValue(x))");
        return next(...args, handleCallReduce(x));
        };
    };
    return next();
};

const sumAB = (a,b) => a + b;

const sum = infiniteCurry(sumAB);

module.exports = sum;