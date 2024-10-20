/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push({ R: 0, G: 0, B: 0 });
  }

  for (let i = 1; i < rings.length; i += 2) {
    const color = rings[i - 1];
    const index = Number(rings[i]);
    arr[index][color]++;
  }

  return arr.filter((val) => val.R > 0 && val.G > 0 && val.B > 0).length;
};

console.log(countPoints('B0B6G0R6R0R6G9')); // 1
console.log(countPoints('B0R0G0R9R0B0G0')); // 1
console.log(countPoints('G4')); // 0
