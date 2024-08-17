var thirdMax = function (nums) {
  const distinctNums = new Set(nums);

  const sortedNums = Array.from(distinctNums).sort((a, b) => b - a);

  if (sortedNums.length >= 3) {
    return sortedNums[2];
  } else {
    return sortedNums[0];
  }
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1

// https://leetcode.com/problems/third-maximum-number/
