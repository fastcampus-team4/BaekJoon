const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, B, C] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(A + B + C);
