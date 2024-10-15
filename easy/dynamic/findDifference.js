/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    Array.from(set1.values()).filter((num) => !set2.has(num)),
    Array.from(set2.values()).filter((num) => !set1.has(num))
  ];
};

console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3], [4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[1,3], [4,6]]
