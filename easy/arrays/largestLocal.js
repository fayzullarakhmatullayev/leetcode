function largestLocal(grid) {
  const n = grid.length;
  const result = [];

  // Loop through the matrix to fill the new matrix
  for (let i = 0; i < n - 2; i++) {
    const row = [];
    for (let j = 0; j < n - 2; j++) {
      let maxVal = -Infinity;

      // Loop through the 3x3 sub-grid to find the maximum
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          maxVal = Math.max(maxVal, grid[x][y]);
        }
      }

      row.push(maxVal);
    }
    result.push(row);
  }

  return result;
}

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2]
  ])
);
