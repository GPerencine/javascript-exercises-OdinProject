const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  for (i in arr){
    sum += arr[i];
  }
  return sum;
  //return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  let product = 1;
  for (i in arr){
    product *= arr[i];
  }
  return product;
  //return array.reduce((product, current) => product * current, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num1) {
	let factor = 1;
  for (let i = 1; i <= num1; i++){
    factor *= i;
  }
  return factor;
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
