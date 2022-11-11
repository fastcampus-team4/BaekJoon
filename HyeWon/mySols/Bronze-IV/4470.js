// https://www.acmicpc.net/problem/4470
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  console.log(`${i + 1}. ${input[i]}`);
}
