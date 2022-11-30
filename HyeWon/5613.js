// https://www.acmicpc.net/problem/5613
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const num = Number(input[0]);
let answer = num;
for (let i = 1; i < input.length; i++) {
  if (input[i] === '+') answer += Number(input[i + 1]);
  else if (input[i] === '-') answer -= Number(input[i + 1]);
  else if (input[i] === '*') answer *= Number(input[i + 1]);
  else if (input[i] === '/') answer = Math.floor(answer / input[i + 1]);
  else if (input[i] === '=') console.log(answer);
}
