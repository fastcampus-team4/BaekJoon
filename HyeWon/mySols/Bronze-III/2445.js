// https://www.acmicpc.net/problem/25965
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
star = '';
/**
 * 양 옆 * 개수는 1, 2, 3, 4, 5까지 늘어남 -> i
 * 공백의 개수는 8, 6, 4, 2, 0으로 줄어듬 -> 2n - 2i
 */
for (let i = 1; i <= n; i++) {
  star = '*'.repeat(i) + ' '.repeat(2 * n - 2 * i) + '*'.repeat(i);
  console.log(star);
}
/**
 * 양 옆 * 개수는 4, 3, 2, 1로 줄어듬 -> i - 1
 * 공백의 개수는 2, 4, 6, 8로 늘어남 -> 2i
 */
for (let i = n - 1; i > 0; i--) {
  star = '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i);
  console.log(star);
}
