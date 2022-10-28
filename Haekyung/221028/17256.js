const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// console.log(input);
const a = input[0].split(' ').map(Number);
const c = input[1].split(' ').map(Number);
// console.log(a);

console.log(c[0] - a[2], c[1] / a[1], c[2] - a[0]);
