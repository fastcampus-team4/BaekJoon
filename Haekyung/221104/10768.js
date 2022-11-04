const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [M, D] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

if (M < 2) {
  return console.log('Before');
} else if (M === 2) {
  if (D < 18) {
    return console.log('Before');
  } else if (D === 18) {
    return console.log('Special');
  } else return console.log('After');
} else return console.log('After');
