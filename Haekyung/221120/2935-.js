const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const A = input[0].trim().length - 1;
const B = input[2].trim().length - 1;

if (input[1].trim() === '*') {
  console.log('1' + '0'.repeat(A + B));
} else {
  if (A === B) {
    console.log('2' + '0'.repeat(A));
  } else {
    console.log(
      '1' +
        '0'.repeat(Math.max(A, B) - Math.min(A, B) - 1) +
        '1' +
        '0'.repeat(Math.min(A, B))
    );
  }
}
