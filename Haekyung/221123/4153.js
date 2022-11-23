const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [A, B, C] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  if (C * C === A * A + B * B) console.log('right');
  else console.log('wrong');
}
