const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);

let N = 0n;

for (let j = 0; j < 3; j++) {
  let sum = 0n;
  for (let i = N + 1n; i < N + input[N] + 1n; i++) {
    sum += input[i];
  }
  sum === 0n ? console.log('0') : sum > 0 ? console.log('+') : console.log('-');
  N += input[N] + 1n;
}
