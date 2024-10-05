/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = function (nums) {
  let elSum = 0;
  let digitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    elSum += nums[i];
  }

  const strNums = nums.join('');

  for (let j = 0; j < strNums.length; j++) {
    digitSum += Number(strNums[j]);
  }

  return Math.abs(elSum) - Math.abs(digitSum);
};

console.log(differenceOfSum([1, 15, 6, 3])); // 9
