const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

const chess = [1, 1, 2, 2, 2, 8];
const res = [];
for (i = 0; i < 6; i++) {
  res.push(chess[i] - input[i]);
}
console.log(...res);
