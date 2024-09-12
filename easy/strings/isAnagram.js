var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) return false;
    obj[t[i]]--;
  }
  return true;
};

// https://leetcode.com/problems/valid-anagram/
