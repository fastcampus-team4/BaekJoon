// https://www.acmicpc.net/problem/11022
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.toString().trim().split(' '));

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let A = Number(input[i][0]);
  let B = Number(input[i][1]);
  let res = A + B;
  console.log(`Case #${i + 1}: ${A} + ${B} = ${res}`);
}
