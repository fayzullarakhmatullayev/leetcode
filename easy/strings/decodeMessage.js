/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const map = new Map();
  let i = 0;
  let j = 0;
  while (i < key.length) {
    if (!map.has(key[i]) && key[i] !== ' ') {
      map.set(key[i], alphabet[j]);
      j++;
    }
    i++;
  }

  let str = '';

  for (let i = 0; i < message.length; i++) {
    str += message[i] === ' ' ? ' ' : map.get(message[i]);
  }

  return str;
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')); // this is a secret
