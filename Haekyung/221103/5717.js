const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (i = 0; i < N.length - 1; i++) {
  const [M, F] = N[i].split(' ').map(Number);
  console.log(M + F);
}
