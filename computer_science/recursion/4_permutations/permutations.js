const permutations = function (arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const allPermutations = [];

  const firstElement = arr[0];
  const rest = arr.slice(1);

  const restPermutations = permutations(rest);

  for (const permutation of restPermutations) {
    for (let i = 0; i <= permutation.length; i += 1) {
      const newPermutation = [
        ...permutation.slice(0, i),
        firstElement,
        ...permutation.slice(i),
      ];

      allPermutations.push(newPermutation);
    }
  }
  return allPermutations;
};

// Do not edit below this line
module.exports = permutations;
