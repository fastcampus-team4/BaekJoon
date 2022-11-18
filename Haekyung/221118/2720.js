const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 1; i <= input[0]; i++) {
  const Q = Math.floor(input[i] / 25);
  const D = Math.floor((input[i] - Q * 25) / 10);
  const N = Math.floor((input[i] - Q * 25 - D * 10) / 5);
  const P = input[i] - Q * 25 - D * 10 - N * 5;
  console.log(Q, D, N, P);
}
