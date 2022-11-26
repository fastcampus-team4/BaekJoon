const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const [A, B, C, D, E] = input[i].split(' ').map(Number);
  console.log(
    `$${(A * 350.34 + B * 230.9 + C * 190.55 + D * 125.3 + E * 180.9).toFixed(
      2
    )}`
  );
}
