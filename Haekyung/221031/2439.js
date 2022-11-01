const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

let star = '';
for (i = 1; i <= N; i++) {
  let space = '';
  for (j = 1; j <= N - i; j++) {
    space += ' ';
  }
  star += '*';
  console.log(space + star);
}
