(() => {
  function findAndReplacePattern(words: string[], pattern: string): string[] {
    const answer: string[] = [];

    for (let word of words) {
      if (isIsomorphic(word, pattern)) {
        answer.push(word);
      }
    }

    return answer;
  }

  function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    if (s === t) return true;

    const mapST: Map<string, string> = new Map();
    const mapTS: Map<string, string> = new Map();

    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];

      if (mapST.has(charS)) {
        if (mapST.get(charS) !== charT) {
          return false;
        }
      } else {
        mapST.set(charS, charT);
      }

      if (mapTS.has(charT)) {
        if (mapTS.get(charT) !== charS) {
          return false;
        }
      } else {
        mapTS.set(charT, charS);
      }
    }

    return true;
  }

  console.log(findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')); // ["mee","aqq"]
})();
