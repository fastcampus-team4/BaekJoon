//https://www.acmicpc.net/problem/25600
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const n = input.shift()[0];
let answer = 0;

for (let i = 0; i < n; i++) {
  let a = input[i][0];
  let d = input[i][1];
  let g = input[i][2];
  let res = a * (d + g);
  if (a === d + g) res = res * 2;
  else res;
  answer = Math.max(answer, res);
}
console.log(answer);
