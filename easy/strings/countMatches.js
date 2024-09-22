/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  items.forEach((item) => {
    const [type, color, name] = item;
    if (
      (ruleKey === 'type' && ruleValue == type) ||
      (ruleKey === 'color' && ruleValue === color) ||
      (ruleKey === 'name' && ruleValue === name)
    ) {
      count++;
    }
  });

  return count;
};

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone']
    ],
    'color',
    'silver'
  )
); // 1
