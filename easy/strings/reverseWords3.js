/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.split(' ');
  const result = [];

  for (let word of words) {
    result.push(word.split('').reverse().join(''));
  }

  return result.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest")); // s'teL ekat edoCteeL tsetnoc
