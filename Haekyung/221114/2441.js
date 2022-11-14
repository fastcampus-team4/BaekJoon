const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

let star = Array(N).fill('*');

let space = '';
for (let i = 0; i < N; i++) {
  console.log(`${space}${star.join('')}`);
  star.pop();
  space += ' ';
}
