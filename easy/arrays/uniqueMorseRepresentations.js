/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const dictionary = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
  };

  let hash = {};
  for (let i = 0; i < words.length; i++) {
    let str = '';
    for (j = 0; j < words[i].length; j++) {
      str += dictionary[words[i][j]];
    }

    hash[str] = (hash[str] || 0) + 1;
  }

  return Object.keys(hash).length;
};

console.log(uniqueMorseRepresentations(['rwjje', 'aittjje', 'auyyn', 'lqtktn', 'lmjwn']));
