const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [x, y] = input[0].trim().split(' ').map(Number);
let seven = (x / y) * 1000;
for (let i = 2; i < input.length; i++) {
  const [xi, yi] = input[i].trim().split(' ').map(Number);
  const other = (xi / yi) * 1000;
  if (other < seven) seven = other;
}
console.log(((seven / 1000) * 1000).toFixed(2));
