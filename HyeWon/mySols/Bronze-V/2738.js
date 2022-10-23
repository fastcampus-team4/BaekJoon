// https://www.acmicpc.net/problem/2738

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const newInput = input.map((e) => e.split(' ').map((e) => e * 1));
newInput;

// 행렬의 크기 n,m
const [n, m] = input.shift();
let a;
let b = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {}
}
