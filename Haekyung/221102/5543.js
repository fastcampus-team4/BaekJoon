const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let cheapB = 2000;
let cheapV = 2000;

for (i = 0; i < 3; i++) {
  if (N[i] < cheapB) {
    cheapB = N[i];
  }
}
N[3] < N[4] ? (cheapV = N[3]) : (cheapV = N[4]);

console.log(cheapB + cheapV - 50);

// 간단하게
// const [A, B, C, D, E] = N
// console.log(Math.min(A,B,C) + Math.min(D,E) - 50)
