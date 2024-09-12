const climbStairs = (n) => {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
};

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5

// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 1 + 3
// 2 + 2
// 3 + 1
