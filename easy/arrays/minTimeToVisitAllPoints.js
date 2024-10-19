/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let sum = 0;

  for (let i = 1; i < points.length; i++) {
    sum += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );
  }

  return sum;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0]
  ])
); // 7

// Just break the array into two array . example points = [[1,1],[3,4],[-1,0]] break it into array a-(1,3,-1) and array b- (1,4,0). Then subtract and take the max value . x=x+(max(abs(a[i]-a[i-1]),abs(b[i]-b[i-1])))
// return x

// https://leetcode.com/problems/minimum-time-visiting-all-points/description/
