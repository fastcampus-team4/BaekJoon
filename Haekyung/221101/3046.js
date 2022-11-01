const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [R1, S] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ');

const R2 = S * 2 - R1;
console.log(R2);
