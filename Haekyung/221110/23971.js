const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [H, W, N, M] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1)));
