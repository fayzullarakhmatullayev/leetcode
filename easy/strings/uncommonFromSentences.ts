function uncommonFromSentences(s1: string, s2: string): string[] {
  const map: Map<string, number> = new Map();

  helper(s1, map);
  helper(s2, map);

  const result: string[] = [];

  for (let [key, val] of map.entries()) {
    if (val === 1) result.push(key);
  }

  return result;
}

function helper(str: string, map: Map<string, number>): void {
  const splitted: string[] = str.split(' ');

  for (let s of splitted) {
    map.set(s, (map.get(s) || 0) + 1);
  }
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
