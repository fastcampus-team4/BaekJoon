const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

input.sort((a, b) => b - a);

const [A, B, C] = input;

if (A === B && B === C && A === C) {
  console.log(10000 + A * 1000);
} else if (A !== B && B == C) {
  console.log(1000 + B * 100);
} else if (B !== C && A == C) {
  console.log(1000 + A * 100);
} else if (A !== C && A == B) {
  console.log(1000 + A * 100);
} else {
  console.log(A * 100);
}