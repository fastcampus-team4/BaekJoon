// https://www.acmicpc.net/problem/2523
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);

let star = '';
for (let i = 1; i <= n; i++) {
  star = '*'.repeat(i);
  console.log(star);
}
for (let i = n - 1; i > 0; i--) {
  star = '*'.repeat(i);
  console.log(star);
}
