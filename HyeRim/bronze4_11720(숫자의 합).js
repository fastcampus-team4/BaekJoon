const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = input[1].split('').map(Number)

let answer = 0;
for(i = 0; i <= input[0] - 1; i += 1) {
  answer += N[i]
}

console.log(answer)