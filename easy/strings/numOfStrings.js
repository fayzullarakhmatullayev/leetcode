/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let count = 0;

  for (let str of patterns) {
    if (word.includes(str)) count++;
  }

  return count;
};

console.log(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc')); // 3
console.log(numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb')); // 2
console.log(numOfStrings(['a', 'a', 'a'], 'ab')); // 3
