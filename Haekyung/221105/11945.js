const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (i = 1; i < input.length; i++) {
  console.log(input[i].trim().split('').reverse().join(''));
}
