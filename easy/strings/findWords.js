/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let keyboardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

  const result = [];

  keyboardRows.forEach((row) => {
    words.forEach((word) => {
      const isTrue = word
        .toLowerCase()
        .split('')
        .every((w) => row.includes(w));
      if (isTrue) {
        result.push(word);
      }
    });
  });

  return result;
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])); // ['Alaska', 'Dad']
console.log(findWords(['omk'])); // []
