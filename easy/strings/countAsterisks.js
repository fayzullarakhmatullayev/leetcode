/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0;
  const arr = s.split('|');
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      for (let char of arr[i]) {
        if (char === '*') {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(countAsterisks('l|*e*et|c**o|*de|'));
