function partitionLabels(s: string): number[] {
  const answer: number[] = [];
  const partition: string[] = [];
  const len = s.length - 1;
  const strArr = Array.from(s);

  for (let i = len; i >= 0; i--) {
    const char = strArr.pop()!;
    partition.push(char);

    const hasPartition = strArr.some((char: string) => partition.includes(char));

    if (!hasPartition) {
      answer.unshift(partition.length);
      partition.length = 0;
    }
  }

  return answer;
}
console.log('🚀 ~ partitionLabels:', partitionLabels('ababcbacadefegdehijhklij')); // [9,7,8]

/**
    Input: s = "ababcbacadefegdehijhklij"
    Output: [9,7,8]
    Explanation:
    The partition is "ababcbaca", "defegde", "hijhklij".
    This is a partition so that each letter appears in at most one part.
    A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.


    Hint 1
    Try to greedily choose the smallest partition that includes the first letter. If you have something like "abaccbdeffed", then you might need to add b. You can use an map like "last['b'] = 5" to help you expand the width of your partition.

    Given a string, divide it into partitions where:
    characters at each partition DOES NOT appear in any other partition
    then return the length of each one.
 */

// The best solution
// function partitionLabels(s: string): number[] {
//   const lastOccurrence: Record<string, number> = {};
//   const answer: number[] = [];

//   // Record the last occurrence of each character
//   for (let i = 0; i < s.length; i++) {
//     lastOccurrence[s[i]] = i;
//   }

//   let partitionEnd = 0;
//   let partitionStart = 0;

//   // Iterate through the string to find partitions
//   for (let i = 0; i < s.length; i++) {
//     partitionEnd = Math.max(partitionEnd, lastOccurrence[s[i]]);
//     if (i === partitionEnd) {
//       answer.push(partitionEnd - partitionStart + 1);
//       partitionStart = i + 1;
//     }
//   }

//   return answer;
// }
