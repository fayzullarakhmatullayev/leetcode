/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimetr = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        perimetr += 4;

        if (grid[i - 1] && grid[i - 1][j]) {
          perimetr--;
        }

        if (grid[i][j - 1]) {
          perimetr--;
        }

        if (grid[i + 1] && grid[i + 1][j]) {
          perimetr--;
        }

        if (grid[i][j + 1]) {
          perimetr--;
        }
      }
    }
  }

  return perimetr;
};

console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[0], [1]]));

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ])
);
