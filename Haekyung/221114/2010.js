const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = input[0];
let res = 1;
for (let i = 1; i <= N; i++) {
  res += input[i] - 1;
}
console.log(res);
