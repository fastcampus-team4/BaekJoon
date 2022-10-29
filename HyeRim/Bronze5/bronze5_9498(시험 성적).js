const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

console.log(input);
let answer = '';

if(input >= 90 && input <= 100) {
  answer = 'A';
} else if(input >= 80 && input <= 89) {
  answer = 'B';
} else if(input >= 70 && input <= 79) {
  answer = 'C';
} else if(input >= 60 && input <= 69) {
  answer = 'D';
} else {
  answer = 'F'
}

console.log(answer);