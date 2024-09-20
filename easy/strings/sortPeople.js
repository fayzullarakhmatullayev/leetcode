/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  // const map = new Map();

  // for (let i = 0; i < names.length; i++) {
  //   map.set(heights[i], names[i]);
  // }

  // return Array.from(map)
  //   .sort((a, b) => b[0] - a[0])
  //   .map((val) => val[1]);

  const people = [];

  for (let i = 0; i < names.length; i++) {
    people.push([heights[i], names[i]]);
  }

  return people.sort((a, b) => b[0] - a[0]).map((val) => val[1]);
};

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170])); // ["Mary","Emma","John"]
