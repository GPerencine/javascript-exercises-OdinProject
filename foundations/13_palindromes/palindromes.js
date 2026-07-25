const palindromes = function (str) {
    const word = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const palindrome = word.split('').reverse().join('')
    return word === palindrome;
};

// Do not edit below this line
module.exports = palindromes;
