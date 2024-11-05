/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let [min, max] = [Infinity, -Infinity];

  for (let num of nums) {
    min = Math.min(num, min);
    max = Math.max(num, max);
  }

  if (min % max === 0) return min;

  let greatest = 0;

  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      greatest = i;
    }
  }

  return greatest;
};

console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3
