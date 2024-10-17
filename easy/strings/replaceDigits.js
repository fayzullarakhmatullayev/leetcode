/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      result += String.fromCharCode(s.charCodeAt(i - 1) + Number(s[i]));
    } else {
      result += s[i];
    }
  }

  return result;
};

console.log(replaceDigits('v0g6s4d')); // vvgmswd
