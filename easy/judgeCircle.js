/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let position = [0, 0];

  for (let move of moves) {
    if (move === 'U') {
      position[0] -= 1;
    } else if (move === 'D') {
      position[0] += 1;
    } else if (move === 'R') {
      position[1] += 1;
    } else if (move === 'L') {
      position[1] -= 1;
    }
  }

  return position[0] === 0 && position[1] === 0;
};

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
