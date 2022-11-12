const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const jinho = input[0],
  N = input[1];
let cnt = 0;
for (let i = 2; i < 2 + N; i++) {
  if (input[i] === jinho) cnt++;
}
console.log(cnt);
