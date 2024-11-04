/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, part.length + i) === part) {
      return removeOccurrences(answer.concat(s.slice(part.length + i)), part);
    } else {
      answer += s[i];
    }
  }

  return answer;
};

console.log(removeOccurrences('daabcbaabcbc', 'abc')); // "dab"
