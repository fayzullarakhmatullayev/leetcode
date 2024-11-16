/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let i = 1;
  let j = arr.length - 2;

  let left = 0;
  let right = arr.length - 1;

  while (i < arr.length) {
    if (arr[i - 1] >= arr[i]) left++;
    if (arr[j - 1] <= arr[j]) right--;

    i++;
    j--;
  }

  if (left === arr.length - 1) return 0;
  let result = Math.min(arr.length - left - 1, right);

  return result;
};

console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])); // [10,4,2] = 3, [1,2,3,3,5]
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1])); // 4
console.log(findLengthOfShortestSubarray([1, 2, 3])); // 0
