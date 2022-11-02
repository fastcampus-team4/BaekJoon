const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sum = N.reduce((acc, cur) => acc + cur, 0);

const x = parseInt(sum / 60, 10);
const y = sum % 60;

console.log(`${x}\n${y}`);
