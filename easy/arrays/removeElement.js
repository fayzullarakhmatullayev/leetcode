/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    const index = nums.indexOf(val);
    if (index !== -1) {
      nums.splice(index, 1);
      nums.push(undefined);
    }
  }
  return nums.filter((val) => val !== undefined).length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
