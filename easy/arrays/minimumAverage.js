/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);

  let min = Infinity;

  const averages = [];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    averages.push((nums[left] + nums[right]) / 2);
    left++;
    right--;
  }

  for (let avarage of averages) {
    min = Math.min(avarage, min);
  }

  return min;
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
