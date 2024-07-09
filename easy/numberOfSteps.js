/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num, steps = 0) {
  if (num <= 0) return steps;
  return numberOfSteps(num % 2 === 0 ? num / 2 : num - 1, ++steps);
};

// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
