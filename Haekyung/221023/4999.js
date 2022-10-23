const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

if (input[0].length >= input[1].length) {
  console.log('go');
} else {
  console.log('no');
}
