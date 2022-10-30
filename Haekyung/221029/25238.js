const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ');
const res = a - (a * b) / 100;

if (res >= 100) {
  console.log('0');
} else {
  console.log('1');
}
