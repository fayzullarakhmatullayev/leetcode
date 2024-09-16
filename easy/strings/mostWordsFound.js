/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;

  for (let i = 0; i < sentences.length; i++) {
    const splitted = sentences[i].split(' ');
    if (splitted.length > max) {
      max = splitted.length;
    }
  }

  return max;
};

console.log(
  mostWordsFound([
    'alice and bob love leetcode',
    'i think so too',
    'this is great thanks very much'
  ])
);
