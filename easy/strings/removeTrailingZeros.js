/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let len = num.length;
  const answer = num.split('');
  for (let i = len - 1; i > 0; i--) {
    if (answer[i] === '0') {
      answer.pop();
    } else {
      break;
    }
  }
  return answer.join('');
};

console.log(removeTrailingZeros('51230100')); // 512301
