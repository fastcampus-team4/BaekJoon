const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [L, A, B, C, D] = N.map(Number);

let min = 0;
Math.ceil(A / C) < Math.ceil(B / D)
  ? (min = Math.ceil(B / D))
  : (min = Math.ceil(A / C));

console.log(L - min);
