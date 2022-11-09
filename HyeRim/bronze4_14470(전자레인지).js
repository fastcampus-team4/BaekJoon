const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B, C, D, E] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = 0;
if(A < 0) {
  const a = Math.abs(A);
  answer = (a * C) + D + (B * E)
} else {
  const sec = B - A;
  answer = sec * E
}

console.log(answer)