/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  return new Set(s).size;
};

console.log(minimizedStringLength('aaabc')); // 3
