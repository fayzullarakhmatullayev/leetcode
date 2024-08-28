/**
 * @param {number[]} nums
 * @return {number[]}
 */

// my solution but could not pass in a large input test

// var findDisappearedNumbers = function (nums) {
//   const sortedArray = nums.sort((a, b) => a - b);

//   const arrExample = [];
//   const result = [];

//   if (sortedArray[0] > 1) {
//     for (let i = sortedArray[0]; i > 0; i--) {
//       result.unshift(i);
//     }
//   }

//   for (let i = sortedArray[0]; i <= sortedArray.length; i++) {
//     arrExample.push(i);
//   }

//   for (let i = 0; i < arrExample.length; i++) {
//     if (!sortedArray.includes(arrExample[i])) {
//       result.push(arrExample[i]);
//     }
//   }

//   return result;
// };

function findDisappearedNumbers(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]
console.log(findDisappearedNumbers([2, 2])); // [1]
console.log(findDisappearedNumbers([1, 1, 2, 2])); // [2]
