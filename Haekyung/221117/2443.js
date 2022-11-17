const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

const star = Array(2 * N - 1).fill('*');
const space = [];
for (let i = 0; i < N; i++) {
  console.log(`${space.join('')}${star.join('')}`);
  star.pop();
  star.pop();
  space.push(' ');
}
