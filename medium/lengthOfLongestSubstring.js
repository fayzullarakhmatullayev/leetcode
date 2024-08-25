/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let s = '*';

    if (!arr.includes(str[i])) {
      s += str[i];
    }

    if (str[i + 1] && str[i] === str[i + 1]) {
      s = '*';
    }
    if (s.length !== 1) {
      s = s.slice(1);
    }

    arr.push(s);
  }

  const splitted = arr.join('').split('*').filter(Boolean);
  let len = splitted[0] ? splitted[0].length : 0;

  if (splitted.length <= 2) return splitted.length;

  for (let i = 1; i < splitted.length; i++) {
    if (splitted[i] && splitted[i].length > len) {
      len = splitted[i].length;
    }
  }

  return len;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring('ckilbkd'));
console.log(lengthOfLongestSubstring(''));
