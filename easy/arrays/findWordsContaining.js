/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  return words.reduce((acc, word, i) => {
    if (word.includes(x)) {
      acc.push(i);
    }
    return acc;
  }, []);
};

console.log(findWordsContaining(['leet', 'code'], 'e')); // [0, 1]
