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

// correct answer
// var isLongPressedName = function (name, typed) {
//   let i = 0; // Pointer for `name`
//   let j = 0; // Pointer for `typed`

//   while (j < typed.length) {
//     if (i < name.length && name[i] === typed[j]) {
//       // If characters match, move both pointers
//       i++;
//     } else if (j === 0 || typed[j] !== typed[j - 1]) {
//       // If characters don't match and `typed[j]` is not a long-pressed version of `typed[j-1]`
//       return false;
//     }
//     j++;
//   }

//   // If all characters in `name` have been matched, return true
//   return i === name.length;
// };

console.log(isLongPressedName('alex', 'aaleex')); // true
console.log(isLongPressedName('saeed', 'ssaaedd')); // false
