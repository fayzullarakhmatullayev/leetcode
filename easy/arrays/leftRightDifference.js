/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = 0;
  let rightSum = 0;

  const leftArr = [];
  const rightArr = [];

  const answer = [];

  for (let left = 0, right = nums.length - 1; left < nums.length; left++, right--) {
    leftArr.push(leftSum);
    rightArr.unshift(rightSum);

    leftSum += nums[left];
    rightSum += nums[right];
  }

  for (let i = 0; i < nums.length; i++) {
    answer.push(Math.abs(leftArr[i] - rightArr[i]));
  }

  return answer;
};

console.log(leftRightDifference([10, 4, 8, 3])); // [15,1,11,22]
