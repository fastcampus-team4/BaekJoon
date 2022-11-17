// https://www.acmicpc.net/problem/2010
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = input.shift();
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += input[i];
}
console.log(sum - (n - 1));
