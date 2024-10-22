/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const set = new Set();

  for (let [from, _] of paths) {
    set.add(from);
  }
  for (let [_, to] of paths) {
    if (!set.has(to)) return to;
  }

  return '';
};

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo']
  ])
); // Sao Paulo
console.log(
  destCity([
    ['pYyNGfBYbm', 'wxAscRuzOl'],
    ['kzwEQHfwce', 'pYyNGfBYbm']
  ])
); // wxAscRuzOl
