/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = new Map();

  for (char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const set = new Set(map.values());
  return set.size === 1;
};

console.log(areOccurrencesEqual('abacbc')); // true
console.log(areOccurrencesEqual('aaabb')); // false
