const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [k, N, M] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// console.log(k, N, M);

const res = k * N - M;

if (res < 0) {
  console.log('0');
} else console.log(res);
