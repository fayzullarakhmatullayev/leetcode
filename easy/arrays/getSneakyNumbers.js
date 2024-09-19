/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const hash = {};
  const result = [];

  for (let num of nums) {
    hash[num] = (hash[num] || 0) + 1;
    if (hash[num] === 2) {
      result.push(num);
    }
  }

  return result;
};

console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])); // [5, 4]
