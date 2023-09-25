const add = function(a, b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return parseInt(a) - parseInt(b);
};

const sum = function(nums) {
	let summ = 0;
  nums.forEach(num => {
    summ += num;
  });
  return summ;
};

const multiply = function(nums) {
  let mult = 1;
  nums.forEach(num => {
    mult *= num;
  });
  return mult;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let res = 1, i;
  for (i=2;i<=a;i++)
    res *= i;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
