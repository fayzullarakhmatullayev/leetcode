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
