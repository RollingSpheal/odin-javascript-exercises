const repeatString = function(string, num) {
    let text = "";
    if(num < 0) {
        text = 'ERROR';
    } else {
        for(let i = num; i; i--) {
            text = text.concat(string);
        }
    }
    
    return text;
};

// Do not edit below this line
module.exports = repeatString;
