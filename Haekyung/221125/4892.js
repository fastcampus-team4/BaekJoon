const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
let N2 = 0;
N3 = 0;
N4 = 0;
for (let i = 0; i < input.length - 1; i++) {
  const N1 = input[i] * 3;
  if (N1 % 2 === 0) {
    N2 = N1 / 2;
    N3 = N2 * 3;
    N4 = parseInt(N3 / 9, 10);
    console.log(`${i + 1}. even ${N4}`);
  } else {
    N2 = (N1 + 1) / 2;
    N3 = N2 * 3;
    N4 = parseInt(N3 / 9, 10);
    console.log(`${i + 1}. odd ${N4}`);
  }
}
