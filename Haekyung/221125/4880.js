const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [A, B, C] = input[i].trim().split(' ').map(Number);

  if (B * B === A * C) {
    console.log(`GP ${(C * C) / B}`);
  } else console.log(`AP ${C * 2 - B}`);
}
