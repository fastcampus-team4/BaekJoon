// https://www.acmicpc.net/problem/10156
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const K = input[0];
const N = input[1];
const M = input[2];

let answer = 0;
if (K * N - M > 0) {
  answer = Math.abs(K * N - M);
}

console.log(answer);
