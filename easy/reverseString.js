/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]];
    i++;
    j--;
  }

  // for (let i = 0, j = str.length - 1; i < j; i++, j--) {
  //   [str[i], str[j]] = [str[j], str[i]];
  // }
};

const str = ['h', 'e', 'l', 'l', 'o'];
reverseString(str); // ["o","l","l","e","h"]

console.log(str);
// https://leetcode.com/problems/reverse-string/
