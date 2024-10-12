/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let [x, y] = [0, 0];

  for (let command of commands) {
    if (command === 'RIGHT') {
      y++;
    }

    if (command === 'LEFT') {
      y--;
    }

    if (command === 'UP') {
      x--;
    }

    if (command === 'DOWN') {
      x++;
    }
  }

  return x * n + y;
};

console.log(finalPositionOfSnake(2, ['RIGHT', 'DOWN'])); // 3
