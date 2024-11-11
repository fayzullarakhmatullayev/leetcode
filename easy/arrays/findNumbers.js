/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;

  for (let num of nums) {
    let len = num.toString().length;
    if (len % 2 === 0) count++;
  }

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
