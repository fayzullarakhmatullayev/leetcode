/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = new Map();

  for (let word of arr) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  const answer = [];

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      answer.push(key);
    }
  }

  if (answer.length < k) return '';

  return answer[k - 1];
};

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2));
console.log(kthDistinct(['ki', 'ci', 'vs', 'sjoxb'], 2)); // ci
