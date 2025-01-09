const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    };
    if (x < 0 || y < 0) {
        return "ERROR";
    ;}
    if (y < x) {
        let yDuplicate = y;
        y = x;
        x = yDuplicate;
    }
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
