/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// my solution. runtime beats 91%, memory beats 61%, not bad huh?
var shuffle = function (nums, n) {
  const portions = [];
  const result = [];

  for (let i = 0; i < nums.length; i += n) {
    portions.push(nums.slice(i, i + n));
  }

  for (let i = 0; i < portions.length; i++) {
    for (let j = 0; j < portions[i].length; j++) {
      if (portions[i + 1]) {
        result.push(portions[i][j], portions[i + 1][j]);
      }
    }
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]

// best solution
// var shuffle = function (nums, n) {
//   let newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(nums[i], nums[n + i]);
//   }
//   return newArr;
// };
