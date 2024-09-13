/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const hash = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      count += hash.get(nums[i]);
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }

  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // (0,3), (0,4), (3,4), (2,5)
