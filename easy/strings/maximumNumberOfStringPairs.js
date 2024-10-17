/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (words[i] === words[j][1] + words[j][0] && i !== j) count++;
    }
  }
  return count;
};

console.log(maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz'])); // 2
