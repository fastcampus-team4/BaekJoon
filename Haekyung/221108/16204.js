const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, M, K] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ');

console.log(Math.min(M, K) + Math.min(N - K, N - M));
