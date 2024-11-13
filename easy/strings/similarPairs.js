/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let i = 0;
  for (let word of words) {
    words[i] = Array.from(new Set(word)).sort().join('');
    i++;
  }

  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (i !== j && words[i] === words[j]) count++;
    }
  }

  return count;
};

console.log(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']));
console.log(similarPairs(['aabb', 'ab', 'ba']));
