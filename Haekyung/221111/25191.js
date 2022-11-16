const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const [A, B] = input[1].trim().split(' ').map(Number);

console.log(Math.floor(A / 2) + B < N ? Math.floor(A / 2) + B : N);
