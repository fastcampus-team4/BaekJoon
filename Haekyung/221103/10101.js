const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, B, C] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

console.log(A, B, C);

if ((A, B, C === 60)) {
  console.log('Equilateral');
} else if ((A + B + C === 180 && A === B) || A === C || B === C) {
  console.log('Isosceles');
} else if (A + B + C === 180 && A !== B && A !== C && B !== C) {
  console.log('Scalene');
} else if (A + B + C !== 180) {
  console.log('Error');
}
