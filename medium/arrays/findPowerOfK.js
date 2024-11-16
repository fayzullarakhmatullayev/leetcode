// my answer
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var resultsArray = function (nums, k) {
  const answer = [];

  const checkIsSortedAndGetMax = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] !== arr[i] - 1) {
        return -1;
      }
    }

    return arr[arr.length - 1];
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums.length - i < k) break;
    answer.push(checkIsSortedAndGetMax(nums.slice(i, k + i)));
  }

  return answer;
};

// best answer
// var resultsArray = function (nums, k) {
//   const answer = [];

//   const checkIsSortedAndGetMax = (arr, start) => {
//     for (let i = start + 1; i < start + k; i++) {
//       if (nums[i - 1] + 1 !== nums[i]) {
//         return -1;
//       }
//     }
//     return nums[start + k - 1];
//   };

//   for (let i = 0; i <= nums.length - k; i++) {
//     answer.push(checkIsSortedAndGetMax(nums, i));
//   }

//   return answer;
// };

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)); //  [3,4,-1,-1,-1]
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2)); //  [3,4,-1,-1,-1]
