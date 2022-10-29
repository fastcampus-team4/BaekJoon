const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let answer = '';

for(let i = 1; i <= input; i += 1) {
  answer += i + '\n';
}

console.log(answer)