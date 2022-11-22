// https://www.acmicpc.net/problem/2562
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let max = Number.MIN_SAFE_INTEGER;
for (let x of input) {
  max = Math.max(max, x);
}
console.log(max);
console.log(input.indexOf(max) + 1);
