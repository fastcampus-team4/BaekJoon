const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);

for (let i = 1; i < input.length; i++) {
  if (input[i] % 2n === 0n) console.log('even');
  else console.log('odd');
}
