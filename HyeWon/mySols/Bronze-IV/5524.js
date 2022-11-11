// https://www.acmicpc.net/problem/5524
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  console.log(`${input[i].toLowerCase()}`);
}
