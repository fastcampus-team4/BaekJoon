// https://www.acmicpc.net/problem/23795
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0;
for (let x of input) {
  if (x === -1) break;
  sum += x;
}
console.log(sum);
