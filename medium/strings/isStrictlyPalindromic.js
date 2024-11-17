/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i < n; i++) {
    if (!isPalindrome(n.toString(i))) return false;
  }

  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  return true;
};

console.log(isStrictlyPalindromic(9)); // false
