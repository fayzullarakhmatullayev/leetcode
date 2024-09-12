/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const hash = new Map();
  let words = paragraph.split(' ');

  for (let word of words) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    hash.set(word, (hash.get(word) || 0) + 1);
  }

  for (let ban of banned) {
    hash.delete(ban);
  }

  let result = '';
  let max = 0;

  for (let [key, val] of hash.entries()) {
    if (val > max) {
      result = key;
      max = val;
    }
  }

  return result.length > 1 && result[0] === result[1] ? result[0] : result;
};

console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']));
