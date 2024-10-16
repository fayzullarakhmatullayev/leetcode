/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const isDivisable = nums1[i] % (nums2[j] * k) === 0;

      if (isDivisable) {
        result.push([i, j]);
      }
    }
  }

  return result.length;
};

console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1)); // 5
console.log(numberOfPairs([1, 2, 4, 12], [2, 4], 3)); // 2
