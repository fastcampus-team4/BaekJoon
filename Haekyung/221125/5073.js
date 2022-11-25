const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [A, B, C] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  if (C >= A + B) {
    console.log('Invalid');
  } else if (A === B && B === C) console.log('Equilateral');
  else if ((A === B && A !== C) || (A === C && A !== B) || (B === C && A !== B))
    console.log('Isosceles');
  else console.log('Scalene');
}
