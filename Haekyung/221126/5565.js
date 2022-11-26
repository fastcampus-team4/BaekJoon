const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sum = input.shift();
const sumOfNine = input.reduce((a, b) => a + b, 0);
console.log(sum - sumOfNine);
