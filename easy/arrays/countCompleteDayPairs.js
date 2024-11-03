/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let count = 0;

  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if (i < j && (hours[i] + hours[j]) % 24 === 0) {
        count++;
      }
    }
  }

  return count;
};

console.log(countCompleteDayPairs([12, 12, 30, 24, 24])); // 2
// The pairs of indices that form a complete day are (0, 1) and (3, 4).
console.log(countCompleteDayPairs([72, 48, 24, 3])); // 3
// The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).
