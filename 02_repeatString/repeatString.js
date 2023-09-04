const repeatString = function(string, count) {
    let concat = '';
    if (count < 0) return 'ERROR';
    for (i = 0; i < count; i++) {
        concat += string;
    }
    return concat;
};

// Do not edit below this line
module.exports = repeatString;
