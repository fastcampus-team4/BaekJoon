function solution(input) {
  input.sort((a, b) => a[0] - b[0]);

  let sum = input[0][1] - input[0][0];

  for (let i = 1; i < input.length; i++) {
    if (input[i][0] < input[i - 1][1]) {
      sum += Math.max(0, input[i][1] - input[i - 1][1]);
      input[i][1] = Math.max(input[i][1], input[i - 1][1]);
    } else {
      sum += input[i][1] - input[i][0];
    }
  }
  return sum;
}
let input = [
  [1, 3],
  [2, 4],
  [5, 10],
  [6, 7],
  [7, 9],
];
let output = solution(input);
console.log(output);
console.log(
  solution([
    [1, 3],
    [2, 4],
    [5, 7],
    [6, 8],
    [7, 9],
  ])
); // 7
