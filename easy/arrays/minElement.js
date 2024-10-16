/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  let min = Infinity;

  nums.forEach((num) => {
    let sum = 0;
    Array.from(num.toString()).forEach((n) => (sum += +n));
    min = Math.min(sum, min);
  });

  return min;
};

console.log(minElement([10, 12, 13, 14]));
