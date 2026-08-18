function dailyTemperatures(temperatures: number[]): number[] {
  const answer = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const previousIndex = stack.pop()!;
      answer[previousIndex] = i - previousIndex;
    }

    stack.push(i);
  }

  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [ 1, 1, 1, 0 ]
