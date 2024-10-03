/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let word of words) {
    if (isPalindrome(word)) return word;
  }
  return '';
};

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])); // aba
