// https://www.acmicpc.net/problem/5612
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift()); // 시간
let m = Number(input.shift()); // 차량 수
let answer = m;
for (let i = 0; i < n; i++) {
  let arr = input[i].split(' ').map(Number);
  m += arr[0] - arr[1];
  if (m < 0) {
    answer = 0;
    break;
  } else if (m > answer) answer = m;
}
console.log(answer);
