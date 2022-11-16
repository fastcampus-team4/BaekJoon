const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, P] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const [A, B, C, D] = [
  P - 500 < 0 ? 0 : P - 500,
  P * 0.9,
  P - 2000 < 0 ? 0 : P - 2000,
  P * 0.75,
];
if (N < 5) console.log(P);
else if (N < 10) console.log(A);
else if (N < 15) console.log(Math.min(A, B));
else if (N < 20) console.log(Math.min(A, B, C));
else console.log(Math.min(A, B, C, D));
