const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n');

console.log(input)
let answer = ''
for(let i = 1; i <= input[0]; i += 1) {
  answer += `${i}. ${input[i]}\n`
}

console.log(answer)
