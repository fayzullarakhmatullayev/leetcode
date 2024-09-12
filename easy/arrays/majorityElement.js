/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};
  let result = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  for (let i in obj) {
    if (obj[i] > sum) {
      sum = obj[i];
      result = i;
    }
  }

  return result;
};

// https://leetcode.com/problems/majority-element
