/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;

  let k = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] !== nums[i]) {
      k++;
      nums[k - 1] = nums[i];
    }
  }
  console.log(nums);
  return k;
};

// console.log(removeDuplicates([1, 1, 2])); // [1,2,_]  2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0,1,2,3,4,_,_,_,_,_]  5
console.log(removeDuplicates([0, 0, 0, 0, 0])); // [0,_,_,_,_]  5
