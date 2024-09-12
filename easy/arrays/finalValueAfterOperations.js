/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let count = 0;

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    if (operation === 'X++' || operation === '++X') {
      count += 1;
    }
    if (operation === 'X--' || operation === '--X') {
      count -= 1;
    }
  }

  return count;
};

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));

const bit = Number(17).toString(2);

console.log({ bit, int: parseInt(bit, 2) });
