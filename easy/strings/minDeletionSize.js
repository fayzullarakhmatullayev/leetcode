/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let count = 0;
  let len = strs[0].length;
  let i = 0;

  while (i < len) {
    let j = 1;

    while (j < strs.length) {
      if (strs[j][i] < strs[j - 1][i]) {
        count++;
        break;
      }

      j++;
    }
    i++;
  }

  return count;
};

console.log(minDeletionSize(['cba', 'daf', 'ghi'])); // 1
console.log(minDeletionSize(['a', 'b'])); // 0
console.log(minDeletionSize(['zyx', 'wvu', 'tsr'])); // 3
console.log(minDeletionSize(['rrjk', 'furt', 'guzm'])); // 3

//  let i = 0;
//  let len = grid[0].length;

//  while (i < len) {
//    let j = 0;
//    let max = 0;
//    while (j < grid.length) {
//      max = Math.max(grid[j][i], max);
//      j++;
//    }
//    sum += max;
//    i++;
//  }
