function minBitFlips(start, goal) {
  let xorResult = start ^ goal;

  let bitFlips = 0;

  while (xorResult > 0) {
    bitFlips += xorResult & 1;

    xorResult >>= 1;
  }

  return bitFlips;
}

// Example usage:
console.log(minBitFlips(10, 7)); // Output: 3
