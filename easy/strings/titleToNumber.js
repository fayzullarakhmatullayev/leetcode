/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle[i];
    result *= 26;
    result += char.charCodeAt(0) - 64;
  }

  return result;
};

console.log(titleToNumber('AA'));
