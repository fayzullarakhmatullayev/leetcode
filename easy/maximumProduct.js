var maximumProduct = function (nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result *= nums[i];
  }

  return result;
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
