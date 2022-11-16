const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [x, y] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (x > y) console.log(x + y);
else console.log(y - x);
