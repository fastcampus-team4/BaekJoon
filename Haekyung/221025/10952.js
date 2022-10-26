const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (i = 0; i < input.length - 1; i++) {
  let A = input[i].split(' ').map(Number)[0];
  let B = input[i].split(' ').map(Number)[1];
  console.log(A + B);
}
