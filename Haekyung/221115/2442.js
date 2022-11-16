const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

let star = '*';
let space = Array(N - 1).fill(' ');
for (let i = 0; i < N; i++) {
  console.log(`${space.join('')}${star}`);
  star += '**';
  space.pop();
}
