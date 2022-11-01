const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (i = 1; i <= N[0]; i++) {
  console.log(`${i}. ${N[i]}`);
}
