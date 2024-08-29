/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let hash = new Map();

  for (let val of t) {
    hash.set(val, (hash.get(val) || 0) + 1);
  }

  for (let val of s) {
    if (hash.has(val)) {
      hash.set(val, hash.get(val) - 1);
    }
  }

  for (let [key, value] of hash.entries()) {
    if (value > 0) {
      return key;
    }
  }

  return '';
};

console.log(findTheDifference('abcd', 'abcde')); // e
