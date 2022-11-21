const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [A, B, C, D] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

for (let x of array) {
  let cnt = 0;
  if (0 < x % (A + B) && x % (A + B) <= A) cnt++;
  if (0 < x % (C + D) && x % (C + D) <= C) cnt++;
  console.log(cnt);
}
