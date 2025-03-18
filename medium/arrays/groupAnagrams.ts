function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  for (const word of strs) {
    const arr = Array(26).fill(0);

    for (const char of word) {
      arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = arr.join('#');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)?.push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [[ "eat", "tea", "ate" ], [ "tan", "nat" ], [ "bat" ]]
