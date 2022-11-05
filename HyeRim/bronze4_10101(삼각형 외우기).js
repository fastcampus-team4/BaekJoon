const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [a, b, c] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = '';
if(a === 60 && b === 60 && c === 60) {
  answer = 'Equilateral'
} else if ((a + b + c === 180) && (a === b || b === c || a === c)) {
  answer = 'Isosceles'
} else if ((a + b + c === 180) && (a !== b || b !== c || a !== c)) {
  answer = 'Scalene'
} else if(a + b + c !== 180) {
  answer = 'Error'
}

console.log(answer)