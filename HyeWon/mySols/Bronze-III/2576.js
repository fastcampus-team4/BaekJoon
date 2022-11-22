// https://www.acmicpc.net/problem/2576
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0;
let min = Number.MAX_SAFE_INTEGER;
for (let x of input) {
  if (x % 2 === 1) {
    sum += x;
    min = Math.min(min, x);
  }
}
if (sum === 0) console.log(-1);
else {
  console.log(sum);
  console.log(min);
}
