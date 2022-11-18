// https://www.acmicpc.net/problem/2446
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
star = '';
/**
 * *개수는 까지 줄어듬 9, 7, ..., 1-> 2i - 1
 * 양 옆 공백의 개수는 1, 2, ..., 4으로 늘어남 -> i
 */
for (let i = n; i > 0; i--) {
  star = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
  console.log(star);
}

for (let i = 2; i <= n; i++) {
  star = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
  console.log(star);
}
