const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, W, H] = input[0].trim().split(' ').map(Number);
const max = Math.sqrt(Math.pow(W, 2) + Math.pow(H, 2));

for (let i = 1; i <= N; i++) {
  const len = Number(input[i]);
  if (len <= max) console.log('DA');
  else console.log('NE');
}
