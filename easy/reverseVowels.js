/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = 'aeiouAEIOU';
  let l = 0;
  let r = s.length - 1;
  s = s.split('');

  while (l < r) {
    while (l < r && !vowels.includes(s[l])) l++;
    while (r > l && !vowels.includes(s[r])) r--;
    [s[l], s[r]] = [s[r], s[l]];

    l++;
    r--;
  }

  return s.join('');
};

console.log(reverseVowels('hello')); // holle
