/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
};

// best solution
// var isPalindrome = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     while (left < right && !isAlphanumeric(s[left])) left++;
//     while (left < right && !isAlphanumeric(s[right])) right--;

//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// };

// function isAlphanumeric(c) {
//   return /[a-z0-9]/i.test(c);
// }

console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('0P')); // false
