/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let currentChar = s.charCodeAt(i);
    let nextCharCode = s.charCodeAt(i + 1);
    score += Math.abs(currentChar - nextCharCode);
  }

  return score;
};

console.log(scoreOfString('hello'));
