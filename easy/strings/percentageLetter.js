/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let count = 0;

  for (char of s) {
    if (char === letter) count++;
  }

  return Math.floor((count / s.length) * 100);
};

console.log(percentageLetter('foobar', 'o')); // 33
console.log(percentageLetter('"jjjj"', 'k')); // 0
