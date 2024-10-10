/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let singleDigitSum = 0;
  let doubleDigitSum = 0;

  for (let num of nums) {
    num > 9 ? (doubleDigitSum += num) : (singleDigitSum += num);
  }

  return singleDigitSum !== doubleDigitSum;
};

console.log(canAliceWin([1, 2, 3, 4, 10])); // false
console.log(canAliceWin([1, 2, 3, 4, 5, 14])); // true
