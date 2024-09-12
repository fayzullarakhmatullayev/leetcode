/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let intersectionArray = [];

  set1.forEach((num) => {
    if (set2.has(num)) {
      intersectionArray.push(num);
    }
  });

  return intersectionArray;
};

// https://leetcode.com/problems/intersection-of-two-arrays
