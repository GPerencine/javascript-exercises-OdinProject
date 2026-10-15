const fibonacci = function (position) {
  if (position <= 0 || typeof position !== "number" || Number.isNaN(position))
    return "OOPS";

  let current = 0;
  let next = 1;

  for (let i = 0; i < Number(position); i++) {
    [current, next] = [next, current + next];
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
