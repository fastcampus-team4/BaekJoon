const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const A = BigInt(`0b${input[0]}`);
const B = BigInt(`0b${input[1]}`);
console.log(BigInt(A * B).toString(2));
