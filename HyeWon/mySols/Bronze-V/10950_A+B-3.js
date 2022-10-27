// https://www.acmicpc.net/problem/10950
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.toString().trim().split(' '));

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let res = Number(input[i][0]) + Number(input[i][1]);
  console.log(`${res}`);
}
