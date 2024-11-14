/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const odds = nums.filter((num) => num % 2 !== 0);
  const evens = nums.filter((num) => num % 2 === 0);

  return evens.concat(odds);
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
