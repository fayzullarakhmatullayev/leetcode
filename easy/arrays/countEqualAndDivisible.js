/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }

  return count;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2)); // 4
console.log(countPairs([1, 2, 3, 4], 1)); // 0
