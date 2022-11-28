const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let N = input[i].trim().split('').map(Number);
  while (N.length !== 1) {
    N = N.reduce((a, b) => a + b, 0);
    N = `${N}`.split('').map(Number);
  }
  console.log(...N);
}
