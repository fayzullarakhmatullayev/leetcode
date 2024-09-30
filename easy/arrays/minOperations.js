/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      count++;
    }
  }

  return count;
};

console.log(minOperations([2, 11, 10, 1, 3], 10)); // 3
console.log(minOperations([1, 1, 2, 4, 9], 1)); // 0
console.log(minOperations([1, 1, 2, 4, 9], 9)); // 4
