const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString();

let answer = 0;
for(let i = 0; i < input; i += 1) {
  answer += 1
}

console.log(answer)
console.log(1)