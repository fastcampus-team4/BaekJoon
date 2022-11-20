const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [H, M] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (M < 45) {
  H = H - 1;
  M = M + 60 - 45;
} else {
  M = M - 45;
}
if (H < 0) H = H + 24;

console.log(H, M);
