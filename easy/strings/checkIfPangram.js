/**
 * @param {string} sentence
 * @return {boolean}
 */
// my solution
var checkIfPangram = function (sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const map = new Map();

  for (let s of sentence) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  for (let char of alphabet) {
    if (!map.has(char)) return false;
  }

  return true;
};

// best solution
// var checkIfPangram = function (sentence) {
//   const set = new Set();

//   for (let s of sentence) {
//     set.add(s);
//   }

//   return set.size === 26;
// };

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // true
console.log(checkIfPangram('leetcode')); // false
