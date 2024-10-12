/**
 * @param {string} s
 * @return {string}
 */

var makeSmallestPalindrome = function (s) {
  let answer = s.split('');
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (answer[left] !== answer[right]) {
      if (answer[left] > answer[right]) {
        answer[left] = answer[right];
      } else {
        answer[right] = answer[left];
      }
    }

    left++;
    right--;
  }

  return answer.join('');
};

console.log(makeSmallestPalindrome('egcfe')); // efcfe
console.log(makeSmallestPalindrome('abcd')); // abba
