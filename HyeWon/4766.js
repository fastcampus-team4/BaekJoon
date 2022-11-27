// https://www.acmicpc.net/problem/4766
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(parseFloat);

for (let i = 1; i < input.length; i++) {
  if (input[i] === 999) break;
  let answer = (input[i] - input[i - 1]).toFixed(2);
  console.log(answer);
}
