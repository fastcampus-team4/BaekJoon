// https://www.acmicpc.net/problem/5596
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));
console.log(input);
const a = input[0];
const b = input[1];

let sum1 = 0;
let sum2 = 0;
a.forEach((e) => {
  sum1 += e;
});
b.forEach((e) => {
  sum2 += e;
});

let answer = Math.max(sum1, sum2);
console.log(answer);
