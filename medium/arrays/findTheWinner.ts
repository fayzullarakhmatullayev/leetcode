function findTheWinner(n: number, k: number): number {
  const players: number[] = Array.from({ length: n }, (_, i) => i + 1);
  let index = 0;
  let testIndex = 0;

  while (players.length > 1) {
    // move k-1 steps forward
    index = (index + k - 1) % players.length;
    console.log(`Calc:  (${testIndex} + ${k - 1} % ${players.length}) = ${index}`);
    testIndex = (testIndex + k - 1) % players.length;

    // eliminate the k-th player
    const eliminated = players.splice(index, 1)[0];
    console.log(`Eliminated: ${eliminated}, Remaining: [${players.join(', ')}], Index: ${index}`);
  }

  return players[0];
}

console.log(findTheWinner(5, 2)); // 3
