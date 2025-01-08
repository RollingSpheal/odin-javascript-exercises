const reverseString = function(text) {
    let textReverse = "";
    for(let length = text.length; length; length--) {
        textReverse = textReverse.concat(text.at(length - 1));
    }
    return textReverse;
};

// Do not edit below this line
module.exports = reverseString;
