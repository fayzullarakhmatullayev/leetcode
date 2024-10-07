/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i + 1] && word[i] === word[i + 1]) {
      count++;
    }
    if (count > 1) return false;
  }

  return true;
};

console.log(equalFrequency('abcc')); // true
console.log(equalFrequency('aazz')); // true

// https://leetcode.com/problems/remove-letter-to-equalize-frequency/description/
