/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('0P')); // false
