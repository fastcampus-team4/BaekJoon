// https://www.acmicpc.net/problem/3276
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);

let row = 0;
let column = 0;
let sum = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= n; i++) {
  let j = n % i === 0 ? parseInt(n / i) : parseInt(n / i) + 1;
  if (i + j < sum) {
    sum = i + j;
    row = i;
    column = j;
  }
}
console.log(row, column);
