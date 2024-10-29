/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const matrix = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < indices.length; i++) {
    const [row, col] = indices[i];

    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j]++;
    }

    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col]++;
    }
  }

  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 1) count++;
    }
  }

  return count;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1]
  ])
);
console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0]
  ])
);

/**
 * First take the indices [0,1], here 0 represent the 0th row and 1 represent the 1st column so it will first       increment the values of 0th row then the inital matrix become [[1,1,1],[0,0,0]] and then it will increment the values of 1st column then the initial matrix become [[1,2,1], [0,1,0]]
  Similarly for other indices [1,1], here it will increment the values of 1st row then inital matrix become [[1,2,1], [1,2,1]] then it will increment the value of 1st column then the inital matrix become [[1,3,1], [1,3,1]]
  Now the no. of odd values are 6 in this matrix so output will be 6
 */
