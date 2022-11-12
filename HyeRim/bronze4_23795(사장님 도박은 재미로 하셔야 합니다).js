const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = 0;
for(let i = 0; i < input.length -1; i += 1) {
  answer += input[i]
}

console.log(answer)
