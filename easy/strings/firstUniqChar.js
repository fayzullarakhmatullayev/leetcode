var firstUniqChar = function (s) {
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = { count: 0, index: i };
    }
    hash[s[i]].count += 1;
    hash[s[i]].index = i;
  }

  for (let key in hash) {
    if (hash[key].count === 1) return hash[key].index;
  }

  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('dddccdbba'));
