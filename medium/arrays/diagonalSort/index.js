/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const diagonals = new Map();

  // Collect elements for each diagonal
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const diagKey = i - j;
      if (!diagonals.has(diagKey)) {
        diagonals.set(diagKey, []);
      }
      diagonals.get(diagKey).push(mat[i][j]);
    }
  }

  // Sort each diagonal
  for (let diag of diagonals.values()) {
    diag.sort((a, b) => a - b);
  }

  // Place sorted elements back into the matrix
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const diagKey = i - j;
      mat[i][j] = diagonals.get(diagKey).shift();
    }
  }

  return mat;
};

console.log(
  diagonalSort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2]
  ])
); // [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
