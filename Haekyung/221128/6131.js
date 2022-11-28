const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

let cnt = 0;
for (let i = 1; i <= 500; i++) {
  for (let j = i; j <= 500; j++) {
    if (i * i + N === j * j) cnt++;
  }
}
console.log(cnt);
