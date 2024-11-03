/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let i = 0;
  while (i < prices.length) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        prices[i] -= prices[j];
        break;
      }
    }
    i++;
  }
  return prices;
};

console.log(finalPrices([8, 4, 6, 2, 3])); // [4,2,4,2,3]
