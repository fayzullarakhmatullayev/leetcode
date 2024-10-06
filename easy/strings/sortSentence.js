/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(' ')
    .sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]))
    .map((val) => val.slice(0, -1))
    .join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3'));
console.log(sortSentence('Myself2 Me1 I4 and3'));
