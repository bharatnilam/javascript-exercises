const fibonacci = function(n) {
    if (n<0)
        return "OOPS"
    n = parseInt(n);
    if (n === 0 || n === 1)
        return n;
    
    let prev1 = 0;
    let prev2 = 1
    let curr = 0;

    for (i=2;i<=n;i++){
        curr = prev1 + prev2;
        prev1=prev2;
        prev2=curr;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
