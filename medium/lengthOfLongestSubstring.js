function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1;
    }

    charIndexMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('ckilbkd'));
console.log(lengthOfLongestSubstring(''));

// Example: "abcabcbb"
// Goal: Find the length of the longest substring without repeating characters.

// Initialize:

// maxLength = 0
// start = 0
// charIndexMap = {}
// Iterate through the string with a sliding window:

// Step	end	s[end]	start	charIndexMap	Substring	maxLength
// 1	0	'a'	0	{ 'a': 0 }	"a"	1
// 2	1	'b'	0	{ 'a': 0, 'b': 1 }	"ab"	2
// 3	2	'c'	0	{ 'a': 0, 'b': 1, 'c': 2 }	"abc"	3
// 4	3	'a'	1	{ 'a': 3, 'b': 1, 'c': 2 }	"bca"	3
// 5	4	'b'	2	{ 'a': 3, 'b': 4, 'c': 2 }	"cab"	3
// 6	5	'c'	3	{ 'a': 3, 'b': 4, 'c': 5 }	"abc"	3
// 7	6	'b'	5	{ 'a': 3, 'b': 6, 'c': 5 }	"cb"	3
// 8	7	'b'	7	{ 'a': 3, 'b': 7, 'c': 5 }	"b"	3
// Visualization Breakdown:
// Step 1:

// end = 0, character 'a'.
// 'a' is not in charIndexMap. Add 'a' to the map with index 0.
// Current substring: "a", update maxLength to 1.
// Step 2:

// end = 1, character 'b'.
// 'b' is not in charIndexMap. Add 'b' to the map with index 1.
// Current substring: "ab", update maxLength to 2.
// Step 3:

// end = 2, character 'c'.
// 'c' is not in charIndexMap. Add 'c' to the map with index 2.
// Current substring: "abc", update maxLength to 3.
// Step 4:

// end = 3, character 'a'.
// 'a' is in charIndexMap with an index 0 which is >= start = 0.
// Update start to charIndexMap.get('a') + 1 = 1.
// Update the map for 'a' to index 3.
// Current substring: "bca", maxLength remains 3.
// Step 5:

// end = 4, character 'b'.
// 'b' is in charIndexMap with an index 1 which is >= start = 1.
// Update start to charIndexMap.get('b') + 1 = 2.
// Update the map for 'b' to index 4.
// Current substring: "cab", maxLength remains 3.
// Step 6:

// end = 5, character 'c'.
// 'c' is in charIndexMap with an index 2 which is >= start = 2.
// Update start to charIndexMap.get('c') + 1 = 3.
// Update the map for 'c' to index 5.
// Current substring: "abc", maxLength remains 3.
// Step 7:

// end = 6, character 'b'.
// 'b' is in charIndexMap with an index 4 which is >= start = 3.
// Update start to charIndexMap.get('b') + 1 = 5.
// Update the map for 'b' to index 6.
// Current substring: "cb", maxLength remains 3.
// Step 8:

// end = 7, character 'b'.
// 'b' is in charIndexMap with an index 6 which is >= start = 5.
// Update start to charIndexMap.get('b') + 1 = 7.
// Update the map for 'b' to index 7.
// Current substring: "b", maxLength remains 3.
// Final Result:
// The length of the longest substring without repeating characters is 3 ("abc").

// This step-by-step walkthrough shows how we use the sliding window and map to track the indices of characters to maintain a substring with unique characters, updating the window when a duplicate character is encountered.
