/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const middle = s.length / 2;
  const left = s
    .slice(0, middle)
    .split('')
    .filter((v) => set.has(v));

  const right = s
    .slice(middle)
    .split('')
    .filter((v) => set.has(v));

  return left.length === right.length;
};

console.log(halvesAreAlike('book')); // true
