const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

input.shift()
let answer = 0;

for(let i = 0; i < input.length; i += 1) {
    answer += input[i] -1
}

console.log(answer + 1)