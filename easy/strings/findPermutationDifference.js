/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const indexS = s.indexOf(char);
    const indexT = t.indexOf(char);

    sum += Math.abs(indexS - indexT);
  }

  return sum;
};

console.log(findPermutationDifference('abc', 'bac')); // |0 - 1| + |1 - 0| + |2 - 2| = 2
