/**
 * @param {number[]} score
 * @return {string[]}
 */

// my solution
// var findRelativeRanks = function (score) {
//   let sorted = [...score].sort((a, b) => b - a);
//   const hash = {};

//   for (let i = 0; i < score.length; i++) {
//     hash[sorted.indexOf(score[i])] = i;
//   }

//   for (let key in hash) {
//     if (+key === 0) {
//       score[hash[key]] = 'Gold Medal';
//     } else if (+key === 1) {
//       score[hash[key]] = 'Silver Medal';
//     } else if (+key === 2) {
//       score[hash[key]] = 'Bronze Medal';
//     } else {
//       score[hash[key]] = (+key + 1).toString();
//     }
//   }

//   return score;
// };

// best solution
var findRelativeRanks = function (score) {
  let sorted = [...score].sort((a, b) => b - a);
  const hash = new Map();

  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      hash.set(sorted[i], 'Gold Medal');
    } else if (i === 1) {
      hash.set(sorted[i], 'Silver Medal');
    } else if (i === 2) {
      hash.set(sorted[i], 'Bronze Medal');
    } else {
      hash.set(sorted[i], (i + 1).toString());
    }
  }
  console.log(hash);
  return score.map((num) => hash.get(num));
};

console.log(findRelativeRanks([1, 2, 3, 4, 5]));
