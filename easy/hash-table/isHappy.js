/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, hash = new Map()) {
  if (n === 1) return true;

  const stringOfNums = n.toString();
  let sum = 0;

  for (let i = 0; i < stringOfNums.length; i++) {
    const num = Number(stringOfNums[i]);
    sum += num * num;
  }

  hash.set(sum, (hash.get(sum) || 0) + 1);

  for (let value of hash.values()) {
    if (value > 1) return false;
  }

  return isHappy(sum, hash);
};

console.log(isHappy(19));
console.log(isHappy(2));
