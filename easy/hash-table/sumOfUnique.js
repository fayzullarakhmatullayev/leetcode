/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const map = new Map();
  let sum = 0;
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      sum += key;
    }
  }

  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2])); // 4
