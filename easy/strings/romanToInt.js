/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (str) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i + 1]] && dictionary[str[i + 1]] > dictionary[str[i]]) {
      result -= dictionary[str[i]];
    } else {
      result += dictionary[str[i]];
    }
  }

  return result;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
