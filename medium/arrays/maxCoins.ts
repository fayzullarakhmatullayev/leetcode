function maxCoins(piles: number[]): number {
  let result: number = 0;

  piles.sort((a, b) => b - a);

  let m = 1;
  let steps = piles.length / 3;

  for (let i = 0; i < steps; i++) {
    result += piles[m];
    m += 2;
  }

  return result;
}

console.log(maxCoins([2, 4, 1, 2, 7, 8])); // 9
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])); // 18
