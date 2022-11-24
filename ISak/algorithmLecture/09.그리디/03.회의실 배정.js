function isNotOverapped(x, y) {
  return x[1] <= y[0] || y[1] <= x[0];
}
function solution(input) {
  let max = 0;
  input.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  for (let i = 0; i < input.length; i++) {
    let arr = [input[i]];
    for (let j = i + 1; j < input.length; j++) {
      if (arr.every((x) => isNotOverapped(x, input[j]))) {
        arr.push(input[j]);
      }
    }
    if (arr.length > max) max = arr.length;
  }

  return max;
}
let input = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let output = solution(input);
console.log(output);
