/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  const len = nums.length;

  for (let i = 0, j = 1; i < len && j < len; i += 2, j += 2) {
    result.push(nums[j]);
    result.push(nums[i]);
  }

  return result;
};

console.log(numberGame([5, 4, 2, 3])); // [3,2,5,4]
console.log(numberGame([2, 5])); // [5,2]
