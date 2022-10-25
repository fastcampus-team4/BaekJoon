const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);
const A = input[0];
const B = input[1];
console.log(A + B, A - B, A * B, parseInt(A / B), A % B);
