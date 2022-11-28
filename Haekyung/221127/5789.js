const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const len = input[i].trim().length;
  if (input[i][len / 2 - 1] === input[i][len / 2]) console.log('Do-it');
  else console.log('Do-it-Not');
}
