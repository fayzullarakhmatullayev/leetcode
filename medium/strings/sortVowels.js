/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowels = 'AEIOUaeiou';
  const vowelsArr = [];

  for (let char of s) {
    if (vowels.includes(char)) {
      vowelsArr.push(char);
    }
  }

  vowelsArr.sort();

  let i = 0;
  let answer = '';

  for (let char of s) {
    if (vowels.includes(char)) {
      answer += vowelsArr[i];
      i++;
    } else {
      answer += char;
    }
  }

  return answer;
};

console.log(sortVowels('lEetcOde')); // lEOtcede
