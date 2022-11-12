const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, B] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const a = 100 - A;
const b = 100 - B;
const c = 100 - a - b;
const d = a * b;
const q = parseInt(d / 100);
const r = d % 100;

console.log(a, b, c, d, q, r);
console.log(c + q, r);
