const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(BigInt);
const res = input[0] + input[1];
console.log(res.toString());
