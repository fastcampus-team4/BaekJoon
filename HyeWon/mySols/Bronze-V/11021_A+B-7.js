// https://www.acmicpc.net/problem/11021
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.toString().trim().split(' '));

const T = Number(input.shift());
input;
for (let i = 0; i < T; i++) {
  let res = Number(input[i][0]) + Number(input[i][1]);
  console.log(`Case #${i + 1}: ${res}`);
}
