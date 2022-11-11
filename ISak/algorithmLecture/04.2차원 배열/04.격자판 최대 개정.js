function solution(input) {
  let sums = [];
  let sum1, sum2;
  let diag = 0;
  let antiDiag = 0;
  let n = input.length;
  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += input[i][j];
      sum2 += input[j][i];
      if (i === j) {
        diag += input[i][j];
      }
      if (i + j === n - 1) {
        antiDiag += input[i][j];
      }
    }
    sums.push(sum1);
    sums.push(sum2);
  }
  sums.push(diag);
  sums.push(antiDiag);

  return Math.max(...sums);
}
let input = [
  [57, 65, 22, 33, 11, 11],
  [15, 66, 77, 34, 21, 13],
  [55, 12, 11, 55, 11, 55],
  [54, 33, 66, 88, 11, 22],
  [88, 99, 12, 16, 18, 33],
  [11, 100, 22, 68, 88, 17],
];
let output = solution(input);
console.log(output);
