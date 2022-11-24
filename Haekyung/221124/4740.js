const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  console.log(input[i].split('').reverse().join(''));
}
