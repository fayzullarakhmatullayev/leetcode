/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const suffix = new Map();
  const prefix = new Set();
  const diff = [];

  for (let num of nums) {
    suffix.set(num, (suffix.get(num) || 0) + 1);
  }

  for (let num of nums) {
    prefix.add(num);
    suffix.set(num, suffix.get(num) - 1);

    if (suffix.get(num) === 0) {
      suffix.delete(num);
    }

    diff.push(prefix.size - suffix.size);
  }

  return diff;
};

// console.log(distinctDifferenceArray([1, 2, 3, 4, 5])); // [-3,-1,1,3,5]
console.log(distinctDifferenceArray([3, 2, 3, 4, 2])); // [-2,-1,0,2,3]
