const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    if (start < 0 || end < 0) return 'ERROR';
    let sum = 0;
    if (start <= end) {
        for (i = start ; i <= end; i++)
            sum += i;
    } else {
        for (i = end ; i <= start; i++)
            sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
