/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// my solution
// var gcdOfStrings = function (str1, str2) {
//   let left = 1;
//   let right = str1.length - 1;
//   let prefix = '';

//   while (left <= right) {
//     if (str2.slice(0, left) === str1.slice(right)) {
//       prefix = str2.slice(0, left);
//       break;
//     }
//     left++;
//     right--;
//   }

//   return prefix;
// };

// this is right answer
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  return str1.slice(0, gcd(str1.length, str2.length));
};

console.log(
  gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX')
);
console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABABAB', 'ABAB'));
