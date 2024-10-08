/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const map = new Map();

  for (let w of word) {
    map.set(w, map.get(w) + 1 || 1);
  }

  const freqArr = Array.from(map.values());

  for (let i = 0; i < freqArr.length; i++) {
    let tempArr = [...freqArr];
    tempArr[i] -= 1;

    const remainingFrequencies = tempArr.filter((f) => f > 0);
    const uniqueFreq = new Set(remainingFrequencies);

    if (uniqueFreq.size === 1) {
      return true;
    }
  }

  return false;
};

// console.log(equalFrequency('abcc')); // true
// console.log(equalFrequency('aazz')); // false
// console.log(equalFrequency('adbc')); // true
console.log(equalFrequency('abbcc')); // true

// https://leetcode.com/problems/remove-letter-to-equalize-frequency/description/
