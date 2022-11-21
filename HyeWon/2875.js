// https://www.acmicpc.net/problem/2566
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let n = input[0];
let m = input[1];
let k = input[2];
let cnt = 0;
while (true) {
  if (n < 2 || m < 1 || n + m - 3 < k) break;
  n = n - 2;
  m = m - 1;
  cnt++;
}
console.log(cnt);
