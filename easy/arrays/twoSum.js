/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in hash) {
      return [hash[diff], i];
    } else {
      hash[nums[i]] = i;
    }
  }

  return [];
};

// https://leetcode.com/problems/two-sum/
