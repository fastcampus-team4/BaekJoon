const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  if (B % A === 0) console.log('factor');
  else if (A % B === 0) console.log('multiple');
  else console.log('neither');
}
