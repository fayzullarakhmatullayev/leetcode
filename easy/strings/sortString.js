function sortString(s) {
  const charCount = new Array(26).fill(0);

  for (const char of s) {
    charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let result = '';
  const length = s.length;

  while (result.length < length) {
    for (let i = 0; i < 26; i++) {
      if (charCount[i] > 0) {
        result += String.fromCharCode(i + 'a'.charCodeAt(0));
        charCount[i]--;
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (charCount[i] > 0) {
        result += String.fromCharCode(i + 'a'.charCodeAt(0));
        charCount[i]--;
      }
    }
  }

  return result;
}

console.log(sortString('aaaabbbbcccc')); // abccbaabccba
console.log(sortString('rat')); // art

/**
 * 
 *  Count the Characters:
    Count of a = 4
    Count of b = 4
    Count of c = 4

    Concatenate all parts: abc + cba + abc + cba
    Result: "abccbaabccba" Hence basically first string formed by all the character present in ascending, second all the character in descending ... till no characters left.
    I have used count sort + Stringbuilder to solve it , it is not an easy problem.
 * 
 */
