/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const map = new Map();

  // check the rows
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j];
      if (val !== '.') {
        map.set(val, (map.get(val) || 0) + 1);
        if (map.get(val) > 1) return false;
      }
    }
    map.clear();
  }

  // check columns
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[j][i];
      if (val !== '.') {
        map.set(val, (map.get(val) || 0) + 1);
        if (map.get(val) > 1) return false;
      }
    }
    map.clear();
  }

  // check each 3x3 boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      map.clear();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const row = boxRow * 3 + i;
          const col = boxCol * 3 + j;
          const val = board[row][col];
          if (val !== '.') {
            map.set(val, (map.get(val) || 0) + 1);
            if (map.get(val) > 1) return false;
          }
        }
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
    ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
    ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
); // true

console.log(
  isValidSudoku([
    ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
    ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
    ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
); // false There are two 1's in the top-left 3x3 sub-box.
