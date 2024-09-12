/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitted = s.split(' ');
  let result = '';

  for (let i = splitted.length; i >= 0; i--) {
    const val = splitted[i];

    if (val) {
      result += val.trim() + ' ';
    }
  }

  return result.trim();
};

console.log(reverseWords('a good   example'));
