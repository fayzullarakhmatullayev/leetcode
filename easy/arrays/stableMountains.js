/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
  const result = [];

  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      result.push(i);
    }
  }

  return result;
};

console.log(stableMountains([1, 2, 3, 4, 5], 2)); // [3,4]
console.log(stableMountains([10, 1, 10, 1, 10], 3)); // [1,3]
console.log(stableMountains([10, 1, 10, 1, 10], 10)); // []
