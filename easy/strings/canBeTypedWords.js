/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */

var canBeTypedWords = function (text, brokenLetters) {
  const splittedText = text.split(' ');
  let count = splittedText.length;

  for (let t of splittedText) {
    for (let char of t) {
      if (brokenLetters.includes(char)) {
        count--;
        break;
      }
    }
  }

  return count;
};

console.log(canBeTypedWords('hello world', 'ad')); // 1
