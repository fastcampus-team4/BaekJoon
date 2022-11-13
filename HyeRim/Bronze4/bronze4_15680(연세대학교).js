const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

console.log(input);

let answer = '';

if(Number(input) === 0) {
  answer = 'YONSEI'
} else if(Number(input) === 1) {
  answer = 'Leading the Way to the Future'
}

console.log(answer)