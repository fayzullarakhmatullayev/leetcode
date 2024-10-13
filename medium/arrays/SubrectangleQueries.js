class SubrectangleQueries {
  /**
   * @param {number[][]} rectangle
   */

  constructor(rectangle) {
    this.rectangle = rectangle;
  }

  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @param {number} newValue
   * @return {void}
   */

  updateSubrectangle(row1, col1, row2, col2, newValue) {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        this.rectangle[i][j] = newValue;
      }
    }
  }

  /**
   * @param {number} row
   * @param {number} col
   * @return {number}
   */

  getValue(row, col) {
    return this.rectangle[row][col];
  }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 */

const rectangle = [
  [1, 2, 1],
  [4, 3, 4],
  [3, 2, 1],
  [1, 1, 1]
];

var obj = new SubrectangleQueries(rectangle);
// [
//   [1, 2, 1],
//   [4, 3, 4],
//   [3, 2, 1],
//   [1, 1, 1]
// ];
console.log(obj.getValue(0, 2)); // 1
obj.updateSubrectangle(0, 0, 3, 2, 5);
console.log(rectangle);
// 5 5 5
// 5 5 5
// 5 5 5
// 5 5 5
console.log(obj.getValue(0, 2)); // 5
console.log(obj.getValue(3, 1)); // 5

obj.updateSubrectangle(3, 0, 3, 2, 10);
console.log(rectangle);
// 5   5   5
// 5   5   5
// 5   5   5
// 10  10  10
console.log(obj.getValue(3, 1)); // 10
console.log(obj.getValue(0, 2)); // 5
