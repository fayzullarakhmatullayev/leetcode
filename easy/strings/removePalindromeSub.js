/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  return s !== s.split('').reverse().join('') ? 2 : 1;
};

console.log(removePalindromeSub('ababa')); // 1
console.log(removePalindromeSub('abb')); // 2
console.log(removePalindromeSub('a')); // 1
console.log(removePalindromeSub('bbaabaaa')); // 2
