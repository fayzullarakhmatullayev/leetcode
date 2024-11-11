/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const map = new Map();
  let max = -Infinity;

  for (let num of nums) {
    let count = (map.get(num) || 0) + 1;
    map.set(num, count);
    max = Math.max(max, count);
  }

  return Array.from(map.values())
    .filter((val) => val === max)
    .reduce((acc, val) => (acc += val), 0);
};

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
