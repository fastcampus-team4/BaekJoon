const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

const S = N[0]
  .trim()
  .split(' ')
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);
const T = N[1]
  .trim()
  .split(' ')
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

S >= T ? console.log(S) : console.log(T);
