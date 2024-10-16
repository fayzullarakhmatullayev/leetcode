/**
 * @param {number[]} nums
 * @return {number}
 */

// easy solution
// var maxProduct = function (nums) {
//   nums.sort((a, b) => b - a);
//   return (nums[0] - 1) * (nums[1] - 1);
// };

// the best solution

var maxProduct = function (nums) {
  const max1 = getMax(nums);
  const idx = nums.indexOf(max1);
  const max2 = getMax(nums, idx);

  return (max1 - 1) * (max2 - 1);
};

const getMax = (nums, idx = -1) => {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (i !== idx) {
      max = Math.max(max, nums[i]);
    }
  }

  return max;
};

console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
console.log(maxProduct([3, 7])); // 12
