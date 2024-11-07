/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let answer = '';
  let right = s.length - 1;

  while (right >= 0) {
    if (s[right] === '#') {
      answer = String.fromCharCode(Number(s.slice(right - 2, right)) + 96) + answer;
      right -= 3;
    } else {
      answer = String.fromCharCode(Number(s[right]) + 96) + answer;
      right--;
    }
  }

  return answer;
};

console.log(freqAlphabets('10#11#12')); // jkab
console.log(freqAlphabets('1326#')); // acz
console.log(freqAlphabets('10#')); // j
console.log(freqAlphabets('123')); // abc
console.log(freqAlphabets('11#12#13#')); // klm
// Scan from right to left, in each step of the scanning check whether there is a trailing "#" 2 indexes away.
/**
 * Input: s = "10#11#12"
   Output: "jkab"
   Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 * 
 */
