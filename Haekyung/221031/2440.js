const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

for (i = 1; i <= N; i++) {
  let star = '';
  for (j = 0; j <= N - i; j++) {
    star += '*';
  }
  console.log(star);
}
