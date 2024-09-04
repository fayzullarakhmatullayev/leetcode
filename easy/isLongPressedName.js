/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

// Wrong Answer 76 / 95 testcases passed
var isLongPressedName = function (name, typed) {
  const map = new Map();

  for (let n of name) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (let t of typed) {
    map.set(t, map.get(t) - 1);
  }

  for (let val of map.values()) {
    if (val > 0) return false;
  }

  return true;
};

console.log(isLongPressedName('alex', 'aaleex')); // true
console.log(isLongPressedName('saeed', 'ssaaedd')); // false
