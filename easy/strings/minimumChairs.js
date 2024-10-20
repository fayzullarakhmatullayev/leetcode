/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let count = 0;
  let max = 0;

  for (let char of s) {
    char === 'E' ? count++ : count--;
    max = Math.max(count, max);
  }

  return max;
};

console.log(minimumChairs('EEEEEEE')); // 7
console.log(minimumChairs('ELELEEL')); // 2
