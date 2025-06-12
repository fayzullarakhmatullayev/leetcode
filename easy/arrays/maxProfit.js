function maxProfit(prices) {
  let n = prices.length;
  let l = 0;
  let r = 1;

  let profit = 0;

  // Brute force
  // for (let i = 0; i < n; i++) {
  //   for (let j = i + 1; j < n; j++) {
  //     profit = Math.max(profit, prices[j] - prices[i]);
  //   }
  // }

  while (r < n) {
    if (prices[l] < prices[r]) {
      profit = Math.max(profit, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r++;
  }

  return profit;
}

console.log(maxProfit([10, 1, 5, 6, 7, 1])); // 6
console.log(maxProfit([10, 8, 7, 5, 2])); // 0
console.log(maxProfit([3, 2, 6, 5, 0, 3])); // 4
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])); // 2
