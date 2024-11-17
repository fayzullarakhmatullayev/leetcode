/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const rowOnes = new Array(m).fill(0);
  const rowZeros = new Array(m).fill(0);
  const colOnes = new Array(n).fill(0);
  const colZeros = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowOnes[i]++;
        colOnes[j]++;
      } else {
        rowZeros[i]++;
        colZeros[j]++;
      }
    }
  }

  const diff = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] = rowOnes[i] + colOnes[j] - rowZeros[i] - colZeros[j];
    }
  }

  return diff;
};

console.log(
  onesMinusZeros([
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 1]
  ])
);
