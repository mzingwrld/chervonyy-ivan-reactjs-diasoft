function sum(...args) {
    let res = 0;
    let countUndef = 0;
    if (args.length === 0) {
        countUndef += 1;
    }
    else {
        args.forEach(element => {
            if (element === undefined) {
                countUndef += 1;
            }
            else {
                res += element;
            }
        });
    }

    if (countUndef === 0) { 
        return res;
    }
    else {
        return undefined;
    }
}

module.exports = sum;