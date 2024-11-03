/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => b - a);
  }

  let sum = 0;
  let i = 0;
  let len = grid[0].length;

  while (i < len) {
    let j = 0;
    let max = 0;
    while (j < grid.length) {
      max = Math.max(grid[j][i], max);
      j++;
    }
    sum += max;
    i++;
  }

  return sum;
};

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1]
  ])
); // 8
console.log(
  deleteGreatestValue([
    [35, 52, 74, 92, 25],
    [65, 77, 1, 73, 32],
    [43, 68, 8, 100, 84],
    [80, 14, 88, 42, 53],
    [98, 69, 64, 40, 60]
  ])
); // 352

console.log(deleteGreatestValue([[10]])); // 10
