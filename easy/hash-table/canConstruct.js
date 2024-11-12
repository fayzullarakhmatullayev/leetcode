/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (let note of ransomNote) {
    map.set(note, (map.get(note) || 0) + 1);
  }

  for (let m of magazine) {
    if (map.has(m)) {
      map.set(m, map.get(m) - 1);
    }
  }

  for (let val of map.values()) {
    if (val > 0) return false;
  }

  return true;
};

console.log(canConstruct('aa', 'aab')); // true
