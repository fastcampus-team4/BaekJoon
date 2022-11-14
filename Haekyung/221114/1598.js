const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [ax, ay] = [Math.ceil(a / 4), a % 4 === 0 ? 4 : a % 4];
const [bx, by] = [Math.ceil(b / 4), b % 4 === 0 ? 4 : b % 4];
console.log(Math.abs(ax - bx) + Math.abs(ay - by));
