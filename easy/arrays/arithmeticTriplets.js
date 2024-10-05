/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// my solution
var arithmeticTriplets = function (nums, diff) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        if (i < j < k && nums[j] - nums[i] === diff && nums[k] - nums[j] == diff) {
          count++;
        }
      }
    }
  }

  return count;
};

/**
 * Best solution
  var arithmeticTriplets = function(nums, diff) {
      const numbers = new Set(nums)

      let tripCount = 0;

      for(let i = nums.length - 1; i > 0; i--){
          let mid = nums[i] - diff
          if(numbers.has(mid) && numbers.has(mid - diff)){
              tripCount++         
          }
      }

      return tripCount--
  };
 */

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
