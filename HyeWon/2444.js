// https://www.acmicpc.net/problem/2444
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
let star = '';

for (let i = 1; i < n; i++) {
  star = ' '.repeat(n - i) + '*'.repeat(i * 2 - 1);
  console.log(star);
}
for (let i = n; i > 0; i--) {
  star = ' '.repeat(n - i) + '*'.repeat(i * 2 - 1);
  console.log(star);
}
