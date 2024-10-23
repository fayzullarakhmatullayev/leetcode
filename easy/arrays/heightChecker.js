/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let count = 0;
  const copyHeights = [...heights];
  heights.sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== copyHeights[i]) count++;
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
