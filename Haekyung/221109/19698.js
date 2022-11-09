const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, W, H, L] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const max = parseInt(W / L, 10) * parseInt(H / L, 10);

console.log(max <= N ? max : N);
