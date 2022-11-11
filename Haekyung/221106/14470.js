const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, B, C, D, E] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let res = 0;
if (A < 0) {
  res = C * (0 - A) + D + B * E;
} else {
  res = E * (B - A);
}

console.log(res);
