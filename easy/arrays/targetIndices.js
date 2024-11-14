/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      answer.push(i);
    }
  }

  return answer;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1, 2]
