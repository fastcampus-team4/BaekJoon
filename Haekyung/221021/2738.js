const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// console.log(input[1]);
const NM = input[0].trim().split(' ').map(Number);
// console.log(NM[0]);
const A = [];
const B = [];

for (let i = 1; i <= NM[0]; i++) {
  A.push(input[i].trim().split(' '));
}
for (let j = NM[0] + 1; j <= NM[0] * 2; j++) {
  B.push(input[j].trim().split(' '));
}
for (let k = 0; k < A.length; k++) {
  res = [];
  for (let l = 0; l < A[k].length; l++) {
    res.push(Number(A[k][l]) + Number(B[k][l]));
  }
  console.log(...res);
}

// console.log(A);
// console.log(B);
// console.log(res)
