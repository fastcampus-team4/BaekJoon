// https://www.acmicpc.net/problem/25965
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.shift());
let cnt = 0;
for (let i = 0; i < n; i++) {
  let answer = 0;
  let m = Number(input[cnt]);
  cnt++;
  let K = [],
    D = [],
    A = [];
  m += cnt;
  while (cnt < m) {
    let arr = input[cnt].split(' ').map(Number);
    K.push(arr[0]);
    D.push(arr[1]);
    A.push(arr[2]);
    cnt++;
  }

  let p = input[cnt];
  let k = p.split(' ').map(Number)[0];
  let d = p.split(' ').map(Number)[1];
  let a = p.split(' ').map(Number)[2];
  for (let x = 0; x < K.length; x++) {
    let sum = K[x] * k - D[x] * d + A[x] * a;
    sum;
    if (sum >= 0) answer += sum;
  }
  cnt++;
  console.log(answer);
}
