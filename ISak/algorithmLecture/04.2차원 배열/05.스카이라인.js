function solution(input) {
  const N = input.length;
  let ans = 0;
  let sideMaximums = [];
  let frontMaximums = [];
  //row-옆쪽에서 본 스카이라인
  for (let i = 0; i < N; i++) {
    const max = Math.max(...input[i]);
    sideMaximums.push(max);
  }

  //column-앞쪽에서 본 스카이라인
  for (let i = 0; i < N; i++) {
    const column = [];
    for (let j = 0; j < N; j++) {
      column.push(input[j][i]);
    }
    const max = Math.max(...column);
    frontMaximums.push(max);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ans += Math.min(frontMaximums[i], sideMaximums[j]) - input[i][j];
    }
  }
  return ans;
}
let input = [
  [10, 11, 12, 11, 15],
  [15, 12, 13, 23, 11],
  [11, 13, 23, 25, 1],
  [11, 2, 3, 11, 13],
  [5, 7, 9, 10, 12],
];
let output = solution(input);
console.log(output);
