const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [d1, d2] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

console.log(d1 * 2 + d2 * 2 * 3.141592);
