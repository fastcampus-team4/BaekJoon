const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const [A, B, C, D, E, F] = input;
console.log(
  [A, B, C, D].reduce((acc, cur) => acc + cur, 0) -
    Math.min(A, B, C, D) +
    Math.max(E, F)
);
