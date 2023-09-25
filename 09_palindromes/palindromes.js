const palindromes = function (text) {
    const clean = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return clean === clean.split('').reverse().join(''); 
};

// Do not edit below this line
module.exports = palindromes;
