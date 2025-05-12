function findDuplicates(nums: number[]): number[] {
  const answer: number[] = [];
  const map: Map<number, number> = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num)! > 1) {
      answer.push(num);
    }
  }

  return answer;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
