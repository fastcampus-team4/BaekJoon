const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let answer = ''
if(Math.max(A, B) === 0) {
  answer = 'Not a moose'
} else if(A === B) {
  answer = `Even ${A + B}`
} else {
  answer = `Odd ${Math.max(A, B) * 2}`
}

console.log(answer)