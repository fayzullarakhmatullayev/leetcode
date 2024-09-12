/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      return str[i];
    }

    arr.push(str[i]);
  }

  return '';
};

console.log(repeatedCharacter('abccbaacz'));
