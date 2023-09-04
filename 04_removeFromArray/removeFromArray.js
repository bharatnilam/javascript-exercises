const removeFromArray = function(array, ...args) {
    newArr = [];
    for (item of array) {
        if (!args.includes(item)) newArr.push(item);
    }
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
