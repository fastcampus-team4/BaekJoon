const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, B] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

console.log((A + B).toString());
