/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let sum = 0;
  let row = 0;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i) - 97;
    sum += widths[charCode];
    if (sum > 100) {
      ++row;
      sum = widths[charCode];
    }
  }

  return [++row, sum];
};

console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10
    ],
    'bbbcccdddaaa'
  )
);
