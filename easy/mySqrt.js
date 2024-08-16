/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (number) {
  if (number < 0) return NaN;
  if (number === 0) return 0;

  let guess = number / 2;
  let epsilon = 0.00001; // Precision level

  while (Math.abs(guess * guess - number) > epsilon) {
    guess = (guess + number / guess) / 2;
  }

  return Math.floor(guess);
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2

// https://leetcode.com/problems/sqrtx
