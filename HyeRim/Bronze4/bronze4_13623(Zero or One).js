const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B, C] = require('fs').readFileSync(filePath).toString().trim().split(' ');

let answer = '';

if(A === B && B === C) {
  answer = '*'
} else if(A === B) {
  answer = 'C'
} else if(A === C) {
  answer = 'B'
} else if(B === C) {
  answer = 'A'
}

console.log(answer)

