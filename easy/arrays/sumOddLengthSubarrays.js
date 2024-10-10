/**
 * @param {number[]} arr
 * @return {number}
 */

// my solution
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  const nums = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i; j <= arr.length; j++) {
      if (arr.slice(i, j).length % 2 === 1) {
        nums.push(arr.slice(i, j));
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      sum += nums[i][j];
    }
  }

  return sum;
};

/**
 * Best solution
 * 
 *  var sumOddLengthSubarrays = function (arr) {
      let i = 0;
      let sum = 0;
      while (i < arr.length) {
        let j = i;
        let subSum = 0;
        let subArr = [];
        while (j < arr.length) {
          subArr.push(arr[j]);
          subSum += arr[j];
          if (subArr.length % 2 === 1) {
            sum += subSum;
          }
          j++;
        }
        i++;
      }
      return sum;
    };
 * 
 */

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66
