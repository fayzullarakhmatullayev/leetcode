type MapType = {
  index: number;
  value: number;
};

function sortTheStudents(score: number[][], k: number): number[][] {
  const map: MapType[] = [];

  for (let i: number = 0; i < score.length; i++) {
    map.push({ index: i, value: score[i][k] });
  }

  map.sort((a: MapType, b: MapType) => b.value - a.value);

  const answer: number[][] = Array(score.length);

  for (let i: number = 0; i < score.length; i++) {
    const mapIdx = map[i].index;
    answer[i] = score[mapIdx];
  }

  return answer;
}

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15]
    ],
    2
  )
); // [ [ 7, 5, 11, 2 ], [ 10, 6, 9, 1 ], [ 4, 8, 3, 15 ] ]
