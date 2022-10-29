const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');

let sum = 0;

for(let i = 0; i < input.length; i += 1) {
  sum += input[i] * input[i];
}

const answer = sum % 10;
console.log(answer)