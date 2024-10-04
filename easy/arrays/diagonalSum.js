/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  let rightIndex = mat.length - 1;
  let leftIndex = 0;

  for (let i = 0; i < mat.length; i++) {
    leftDiagonalSum += mat[i][leftIndex];

    if (i !== rightIndex) {
      rightDiagonalSum += mat[i][rightIndex];
    }

    leftIndex++;
    rightIndex--;
  }

  return leftDiagonalSum + rightDiagonalSum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
); // 25
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ])
); // 8

/**
 * Input: mat = [[1,2,3],
                [4,5,6],
                [7,8,9]]
  Output: 25
  Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
  Notice that element mat[1][1] = 5 is counted only once.
 * 
 */

// https://leetcode.com/problems/matrix-diagonal-sum/
