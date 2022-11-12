const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, B] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.min(Math.floor(A / 2), B));
