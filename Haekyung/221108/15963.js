const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, M] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ');

if (N === M) {
  console.log(1);
} else {
  console.log(0);
}
