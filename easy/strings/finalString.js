/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    s[i] === 'i' ? result.reverse() : result.push(s[i]);
  }

  return result.join('');
};

console.log(finalString('string')); // rtsng
console.log(finalString('poiinter')); // ponter
