// https://www.acmicpc.net/problem/25494
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));
const t = input.shift();
let answer = 0;
for (let i = 0; i < t; i++) {
  answer = Math.min(input[i][0], input[i][1], input[i][2]);
  console.log(answer);
}
