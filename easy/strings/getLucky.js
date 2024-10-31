/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let tranformed = '';

  for (char of s) {
    tranformed += char.charCodeAt() - 96;
  }

  let i = 0;

  while (i < k) {
    let newTransformed = 0;

    for (let char of tranformed) {
      newTransformed += Number(char);
    }

    tranformed = newTransformed.toString();
    i++;
  }

  return Number(tranformed);
};

console.log(getLucky('zbax', 2));
console.log(getLucky('iiii', 1));
