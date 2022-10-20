const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);

const a = input[0];
const b = input[1];

console.log(a + b + '\n' + (a - b) + '\n' + a * b);
