const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [x, y, w, h] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.min(x, y, w - x, h - y));
