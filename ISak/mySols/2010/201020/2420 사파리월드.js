const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

N = input[0];
M = input[1];

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}
console.log(abs(N - M));
