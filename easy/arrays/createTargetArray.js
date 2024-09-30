/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (result[index[i]] === undefined) {
      result[index[i]] = nums[i];
    } else {
      result.splice(index[i], 0, nums[i]);
    }
  }

  return result;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]

/**
 * 
  nums       index     target
  0            0        [0]
  1            1        [0,1]
  2            2        [0,1,2]
  3            2        [0,1,3,2]
  4            1        [0,4,1,3,2]

 */
