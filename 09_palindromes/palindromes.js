const palindromes = function (phrase) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    const newPhrase = phrase
    .toLowerCase().
    split('').
    filter((characters) => alphanumerical.includes(characters))
    .join('');

    const reversedPhrase = newPhrase
    .split('')
    .reverse()
    .join('');

    return newPhrase === reversedPhrase;
};

// Do not edit below this line
module.exports = palindromes;
