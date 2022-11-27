const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let N = Number(input[i]);
  let res = 0;
  while (N !== 0) {
    res += N * N;
    N--;
  }
  console.log(res);
}
