const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let res = 0;
for (let i = 1; i <= input[0]; i++) {
  console.log(solution(input[i]));
}
function solution(n) {
  let sum = 1;
  let answer = 0;
  let res = [];
  for (let i = 1; i <= n; i++) {
    sum += i + 1;
    answer = sum * i;
    res.push(answer);
  }
  return res.reduce((a, b) => a + b, 0);
}
