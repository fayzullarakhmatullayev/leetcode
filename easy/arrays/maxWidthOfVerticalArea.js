/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let answer = 0;

  const maxs = points.map((point) => point[0]).sort((a, b) => a - b);

  for (let i = 0; i < maxs.length; i++) {
    if (maxs[i + 1]) answer = Math.max(Math.abs(maxs[i] - maxs[i + 1]), answer);
  }

  return answer;
};

console.log(
  maxWidthOfVerticalArea([
    [8, 7],
    [9, 9],
    [7, 4],
    [9, 7]
  ])
); // 1
