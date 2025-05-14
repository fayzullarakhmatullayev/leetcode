function minSteps(s: string, t: string): number {
  const hash: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    hash.set(charS, (hash.get(charS) || 0) + 1);

    if (hash.has(charT)) {
      hash.set(charT, hash.get(charT)! - 1);
    }
  }

  let count = 0;
  for (let num of hash.values()) {
    if (num > 0) {
      count += num;
    }
  }

  return count;
}

console.log(minSteps('bab', 'aba'));
console.log(minSteps('friend', 'family'));
console.log(minSteps('leetcode', 'practice'));
