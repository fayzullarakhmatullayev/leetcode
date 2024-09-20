/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const arr = Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])); // leetcode

/**
 *    c o d e l e e t
 *    4 5 6 7 0 2 1 3
 *
 *    l e e t c d o e
 *
 */
