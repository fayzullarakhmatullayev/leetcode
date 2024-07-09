/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val in hash) return true;
    hash[val] = (hash[val] || 0) + 1;
  }

  return false;
};

// https://leetcode.com/problems/contains-duplicate/
