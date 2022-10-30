const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (i = 1; i <= N[0]; i++) {
  if (6 <= N[i].trim().length && N[i].trim().length <= 9) {
    console.log('yes');
  } else console.log('no');
}
