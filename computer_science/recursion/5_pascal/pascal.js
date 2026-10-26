const pascal = function (number) {
  if (number === 1) return [number];

  const previousRow = pascal(number - 1);

  const currentRow = [1];

  for (let i = 0; i < previousRow.length - 1; i++) {
    currentRow.push(previousRow[i] + previousRow[i + 1]);
  }

  currentRow.push(1);
  return currentRow;
};

// 1 - 0, 1, 0 [0+1]
// 2 - 0, 1, 1, 0 [0+1, 1+0]
// 3 - 0, 1, 2, 1, 0 [0+1, 1+1, 1+0]
// 4 - 0, 1, 3, 3, 1, 0 [0+1, 1+2, 2+1, 1+0]

// Do not edit below this line
module.exports = pascal;
