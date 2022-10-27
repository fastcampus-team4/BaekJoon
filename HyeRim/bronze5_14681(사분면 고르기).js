const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input)

const X = input[0]
const Y = input[1]
console.log(X)
console.log(Y)

let answer = '';
if (X > 0 && Y > 0) {
  answer = 1;
} else if (X < 0 && Y > 0) {
  answer = 2;
} else if (X < 0 && Y < 0) {
  answer = 3;
} else if (X > 0 && Y < 0) {
  answer = 4;
}

console.log(answer);
