const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let answer = 0;
for (let i = 1; i < input.length; i++) {
  let money = 0;
  const [A, B, C] = input[i].split(' ').map(Number);
  if (A === B && A === C) money = 10000 + A * 1000;
  else if ((A === B && A !== C) || (A === C && A !== B)) money = 1000 + A * 100;
  else if (B === C && A !== B) money = 1000 + B * 100;
  else money = Math.max(A, B, C) * 100;
  if (money > answer) answer = money;
}
console.log(answer);
