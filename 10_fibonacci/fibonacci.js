const fibonacci = function(input) {
    if (input < 0) return "OOPS";

    if (input == 0) return 0;
    
    let fNum = 0;
    let num1 = 0;
    let num2 = 1;
    for (let i = 1; i <= input; i++) {
        num1 = num2;
        num2 = fNum;
        fNum = num1 + num2;
    }
    return fNum;
};

// Do not edit below this line
module.exports = fibonacci;
