/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const fromChar = s[0].charCodeAt();
  const toChar = s[3].charCodeAt();

  const fromDigit = +s[1];
  const toDigit = +s[4];

  const result = [];

  for (let i = fromChar; i <= toChar; i++) {
    for (let j = fromDigit; j <= toDigit; j++) {
      result.push(String.fromCharCode(i) + j);
    }
  }

  return result;
};

console.log(cellsInRange('K1:L2'));

/**
 *
 * Generates exel table something like that
 *
 *  ________________
 * |    |  K  |  L  |
 * |____|_____|_____|
 * |  1 |     |     |
 * |____|_____|_____|
 * |  2 |     |     |
 * |____|_____|_____|
 *
 *
 * The output should be ["K1","K2","L1","L2"]
 */
