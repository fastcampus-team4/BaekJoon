const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

const num = Number(input)

let answer = '';
for(let i = num; i > 0; i -= 1) {
    answer += i + '\n'
}

console.log(`${answer}`)
