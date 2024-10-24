/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;

  for (let word of words) {
    // I could've used startWith, but this is fine
    // Hey whoever is reading this, don't give up! Trust the process. It will pay off for sure
    if (word.slice(0, pref.length) === pref) count++;
  }

  return count;
};

console.log(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')); // 2
