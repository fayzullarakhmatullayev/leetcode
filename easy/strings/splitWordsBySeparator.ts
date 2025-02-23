function splitWordsBySeparator(words: string[], separator: string): string[] {
  const splitted: string[][] = [];

  for (let w of words) {
    splitted.push(w.split(separator));
  }

  return splitted.flat().filter(Boolean);
}

console.log(splitWordsBySeparator(['one.two.three', 'four.five', 'six'], '.'));
console.log(splitWordsBySeparator(['$easy$', '$problem$'], '$'));

const regex = /[^a-zA-Z]/g;

console.log('one.two.three'.split('.'));
