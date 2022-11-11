// https://www.acmicpc.net/problem/10101
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const a = input[0];
const b = input[1];
const c = input[2];

let answer = '';
if (a === 60 && b === 60 && c === 60) {
  answer = 'Equilateral';
} else if (a + b + c === 180 && (a === b || b === c || c === a)) {
  answer = 'Isosceles';
} else if (a + b + c === 180 && a !== b && b !== c && c !== a) {
  answer = 'Scalene';
} else if (a + b + c !== 180) {
  answer = 'Error';
}
console.log(answer);
