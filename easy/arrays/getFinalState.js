/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */

var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    const min = Math.min(...nums);
    const index = nums.indexOf(min);
    nums[index] *= multiplier;
  }

  return nums;
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2)); // [8,4,6,5,6]

/**
 * Operation	Result
  After operation 1	[2, 2, 3, 5, 6]
  After operation 2	[4, 2, 3, 5, 6]
  After operation 3	[4, 4, 3, 5, 6]
  After operation 4	[4, 4, 6, 5, 6]
  After operation 5	[8, 4, 6, 5, 6]
 * 
 */
