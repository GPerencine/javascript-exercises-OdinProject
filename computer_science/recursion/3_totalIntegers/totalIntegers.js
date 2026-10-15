const totalIntegers = function (object) {
  if (object === null || typeof object !== "object") {
    return;
  }

  let count = 0;

  const elements = Array.isArray(object) ? object : Object.values(object);

  for (const element of elements) {
    if (Number.isInteger(element)) {
      count++;
    } else if (element !== null && typeof element === "object") {
      count += totalIntegers(element);
    }
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
