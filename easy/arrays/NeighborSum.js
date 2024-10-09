class NeighborSum {
  /**
   * @param {number[][]} grid
   */
  constructor(grid) {
    this.grid = grid;
    this.map = new Map();
    this.setKeysAndValues();
  }

  setKeysAndValues() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        this.map.set(this.grid[i][j], [i, j]);
      }
    }
  }

  /**
   * @param {number} value
   * @return {number}
   */
  adjacentSum(value) {
    let sum = 0;
    const [x, y] = this.map.get(value);

    // check left
    if (this.grid[x][y - 1]) {
      sum += this.grid[x][y - 1];
    }

    // check right
    if (this.grid[x][y + 1]) {
      sum += this.grid[x][y + 1];
    }

    // check top
    if (this.grid[x - 1] && this.grid[x - 1][y]) {
      sum += this.grid[x - 1][y];
    }

    // check bottom
    if (this.grid[x + 1] && this.grid[x + 1][y]) {
      sum += this.grid[x + 1][y];
    }

    return sum;
  }

  /**
   * @param {number} value
   * @return {number}
   */
  diagonalSum(value) {
    let sum = 0;
    const [x, y] = this.map.get(value);

    // check top left
    if (this.grid[x - 1] && this.grid[x - 1][y - 1]) {
      sum += this.grid[x - 1][y - 1];
    }

    // check top right
    if (this.grid[x - 1] && this.grid[x - 1][y + 1]) {
      sum += this.grid[x - 1][y + 1];
    }

    // check bottom left
    if (this.grid[x + 1] && this.grid[x + 1][y - 1]) {
      sum += this.grid[x + 1][y - 1];
    }

    // check bottom right
    if (this.grid[x + 1] && this.grid[x + 1][y + 1]) {
      sum += this.grid[x + 1][y + 1];
    }

    return sum;
  }
}

const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

/**
    The adjacent neighbors of 1 are 0, 2, and 4.
    The adjacent neighbors of 4 are 1, 3, 5, and 7.
    The diagonal neighbors of 4 are 0, 2, 6, and 8.
    The diagonal neighbor of 8 is 4.
 *
 */

const obj = new NeighborSum(grid);
const param_1 = obj.adjacentSum(1);
const param_2 = obj.adjacentSum(4);
const param_3 = obj.diagonalSum(4);
const param_4 = obj.diagonalSum(8);

console.log({ adjacentSum: { param_1, param_2 }, diagonalSum: { param_3, param_4 } });
