const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const x = input[1].split(' ')[0];
let res = 0;
for (let i = 0; i < 4; i++) {
  if (input[0].trim().split(' ')[i] === x) {
    res = i + 1;
  }
}
console.log(res);
