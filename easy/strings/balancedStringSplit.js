/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let anw = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === 'L' ? count++ : count--;
    count === 0 && anw++;
  }

  return anw;
};

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
