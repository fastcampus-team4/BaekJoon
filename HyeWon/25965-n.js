// https://www.acmicpc.net/problem/25965
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
let answer = 0;
for (let i = 0; i < n; i++) {
  let m = Number(input.shift());
  let arr = [];
  let K = 0,
    D = 0,
    A = 0;
  for (let j = 0; j < m; j++) {
    arr.push(input.shift().split(' ').map(Number));
    K += arr[j][0];
    D += arr[j][1];
    A += arr[j][2];
  }
  let p = input.shift();
  let k = p.split(' ').map(Number)[0];
  let d = p.split(' ').map(Number)[1];
  let a = p.split(' ').map(Number)[2];
  answer = K * k - D * d + A * a;
  console.log(answer);
}
