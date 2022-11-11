const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = '';

for(let i = 1; i <= input[0]; i += 1) {
  const num = input[i].split(' ');
  const a = Number(num[0]);
  const b = Number(num[1]);
  answer += a + b + '\n'
}

console.log(answer)