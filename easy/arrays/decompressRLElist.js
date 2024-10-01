/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i += 2) {
    const [freq, val] = [nums[i], nums[i + 1]];
    const arr = Array(freq).fill(val);
    result.push(arr);
  }

  return result.flat();
};

console.log(decompressRLElist([1, 2, 3, 4])); // [2,4,4,4]
