const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// console.log(input);

const [A, B] = input[0].split(' ').map(Number);
const C = input[1];
if (A + B >= 2 * C) {
  console.log(A + B - 2 * C);
} else console.log(A + B);
