/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (str) {
  let left = 0;
  let right = str.length - 1;
  const arr = str.split('');

  const checkIsLetter = (s) => {
    return /^[a-zA-Z]+$/.test(s);
  };

  while (left < right) {
    if (checkIsLetter(arr[left]) && checkIsLetter(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
    }

    if (!checkIsLetter(arr[left]) && checkIsLetter(arr[right])) left++;
    if (checkIsLetter(arr[left]) && !checkIsLetter(arr[right])) right--;
    if (!checkIsLetter(arr[left]) && !checkIsLetter(arr[right])) {
      left++;
      right--;
    }
  }

  return arr.join('');
};

console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')); // "Qedo1ct-eeLg=ntse-T!"
