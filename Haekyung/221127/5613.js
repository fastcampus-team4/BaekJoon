const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let res = Number(input[0]);
console.log(res);
for (let i = 1; i < input.length; i++) {
  if (input[i].trim() === '+') res += Number(input[i + 1]);
  else if (input[i].trim() === '-') res -= Number(input[i + 1]);
  else if (input[i].trim() === '*') res *= Number(input[i + 1]);
  else if (input[i].trim() === '/') res = parseInt(res / input[i + 1], 10);
  else if (input[i].trim() === '=') console.log(res);
}
