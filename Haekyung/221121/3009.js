const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let A, B;
const X = [];
const Y = [];
for (let i = 0; i < input.length; i++) {
  X.push(input[i].trim().split(' ')[0]);
  Y.push(input[i].trim().split(' ')[1]);
}

if (X[0] === X[1]) {
  A = X[2];
} else if (X[0] === X[2]) {
  A = X[1];
} else {
  A = X[0];
}
if (Y[0] === Y[1]) {
  B = Y[2];
} else if (Y[0] === Y[2]) {
  B = Y[1];
} else {
  B = Y[0];
}
console.log(A, B);
