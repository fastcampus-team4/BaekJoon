const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let answer = '';
for(let i = input; i >= 1; i -= 1) {
  answer += `${'*'.repeat(i)}\n`
}

console.log(answer)
