/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const charCode = coordinates[0].charCodeAt() - 96;
  const num = Number(coordinates[1]);

  const isEvenChar = charCode % 2 === 0;
  const isEvenNum = num % 2 === 0;

  if ((!isEvenChar && !isEvenNum) || (isEvenChar && isEvenNum)) return false;

  return true;
};

console.log(squareIsWhite('a1')); // false
console.log(squareIsWhite('h3')); // true
