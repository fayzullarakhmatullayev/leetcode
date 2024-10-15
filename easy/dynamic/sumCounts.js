/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let n = nums.length;
  let result = 0;

  for (let start = 0; start < n; start++) {
    const freqMap = new Map();
    for (let end = start; end < n; end++) {
      freqMap.set(nums[end], (freqMap.get(nums[end]) || 0) + 1);
      let distinctCount = freqMap.size;
      result += distinctCount * distinctCount;
    }
  }

  return result;
};

console.log(sumCounts([1, 2, 1])); // 15

// Input: nums = [1,2,1]
// Output: 15
// Explanation: Six possible subarrays are:
// [1]: 1 distinct value
// [2]: 1 distinct value
// [1]: 1 distinct value
// [1,2]: 2 distinct values
// [2,1]: 2 distinct values
// [1,2,1]: 2 distinct values
// The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.
