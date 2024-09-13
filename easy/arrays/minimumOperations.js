/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += Math.min(nums[i] % 3, 3 - (nums[i] % 3));
  }

  return count;
};

// console.log(minimumOperations([1, 2, 3, 4])); // 3
