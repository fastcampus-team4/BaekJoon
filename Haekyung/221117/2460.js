const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let cnt = 0;
let answer = 0;
for (let i = 0; i < input.length; i++) {
  const [Out, In] = input[i].split(' ').map(Number);
  cnt += In - Out;
  if (answer < cnt) answer = cnt;
}
console.log(answer);
