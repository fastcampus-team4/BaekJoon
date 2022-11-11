const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = input.length;
let min = 1001;
for (let i = 1; i < N; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  if (B < min && A <= B) {
    min = B;
  }
}

if (min === 1001) {
  console.log(-1);
} else console.log(min);
