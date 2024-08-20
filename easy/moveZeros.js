// this was my solution but could not pass in large input test
// var moveZeroes = function (nums) {
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       if (nums[i] === 0) {
//         const sliced = nums.splice(i, 1);
//         nums.push(sliced[0]);
//       }
//     }
//   }

//   return nums;
// };

// here is the right solution
var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt++;
    }
  }

  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 0, 1]));
