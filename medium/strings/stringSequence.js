/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function (target) {
  const answer = [];
  let str = '';
  for (let i = 0; i < target.length; i++) {
    for (let j = 97; j < 123; j++) {
      const char = String.fromCharCode(j);
      answer.push(str + char);

      if (target[i] === char) {
        str += char;
        break;
      }
    }
  }

  return answer;
};

console.log(stringSequence('abc')); // ["a","aa","ab","aba","abb","abc"]
