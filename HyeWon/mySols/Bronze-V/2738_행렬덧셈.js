// https://www.acmicpc.net/problem/2738

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const newInput = input.map((e) => e.split(' ').map(Number));

// 행렬의 크기 n,m
const [n, m] = newInput.shift();
console.log(newInput);

let A = [];
let B = [];

for (let i = 0; i < n; i++) {
  A.push(newInput[i]);
}
console.log(A);

for (let i = n; i < n * 2; i++) {
  B.push(newInput[i]);
}
console.log(B);

for (let i = 0; i < n; i++) {
  let answer = [];
  for (let j = 0; j < m; j++) {
    answer.push(A[i][j] + B[i][j]);
  }
  console.log(...answer);
}
