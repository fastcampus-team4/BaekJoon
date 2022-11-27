// https://www.acmicpc.net/problem/4619
// 시간초과남...
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let x of input) {
  let arr = x.split(' ').map(Number);

  const b = arr[0];
  const n = arr[1];
  let min = Number.MAX_SAFE_INTEGER;
  let res = 0;
  if (b === 0 && n === 0) break;
  for (let a = 1; Math.pow(a, n) <= 1000000000000; a++) {
    let diff = Math.abs(Math.pow(a, n) - b);
    if (min > diff) {
      min = diff;
      res = a;
    }
  }
  console.log(res);
}
