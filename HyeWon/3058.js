// https://www.acmicpc.net/problem/3058
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  let arr = input[i].split(' ').map(Number);
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 0) {
      sum += x;
      min = Math.min(min, x);
    }
  }
  console.log(sum, min);
}
