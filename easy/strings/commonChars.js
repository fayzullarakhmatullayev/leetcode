/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let map = new Map();

  for (let char of words[0]) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 1; i < words.length; i++) {
    let newMap = new Map();
    for (let char of words[i]) {
      if (map.has(char)) {
        newMap.set(char, Math.min((newMap.get(char) || 0) + 1, map.get(char)));
      }
    }

    map = null;
    map = newMap;
  }

  const answer = [];

  for (let [key, val] of map.entries()) {
    for (let i = 0; i < val; i++) {
      answer.push(key);
    }
  }

  return answer;
};

/**
 * Initialize a frequency map using the characters of the first word. For each subsequent word, create a new     frequency map and update the initial map to keep the minimum frequency of each character. Finally, construct the result list by adding each character the number of times it appears in the final frequency map.
 *
 */

console.log(commonChars(['bella', 'label', 'roller'])); // [ 'l', 'l', 'e' ]
console.log(commonChars(['cool', 'lock', 'cook'])); // [ 'c', 'o' ]
console.log(
  commonChars([
    'acabcddd',
    'bcbdbcbd',
    'baddbadb',
    'cbdddcac',
    'aacbcccd',
    'ccccddda',
    'cababaab',
    'addcaccd'
  ])
); // []
