const factorial = function (number) {
  if (
    number < 0 ||
    typeof number !== "number" ||
    Number.isNaN(number) ||
    !Number.isInteger(number)
  ) {
    return undefined;
  } else if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = factorial;
