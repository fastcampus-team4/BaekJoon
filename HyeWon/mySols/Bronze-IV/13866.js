// https://www.acmicpc.net/problem/13866
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const a = input[0] + input[3];
const b = input[1] + input[2];
const answer = Math.abs(a - b);
console.log(answer);
