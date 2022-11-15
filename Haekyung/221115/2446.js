const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

let space = [];
let star = Array(N * 2 - 1).fill('*');
for (let i = 0; i < N * 2; i++) {
  if (i < N - 1) {
    console.log(`${space.join('')}${star.join('')}`);
    star.pop();
    star.pop();
    space.push(' ');
  }
  if (i === N) {
    console.log(`${space.join('')}${star.join('')}`);
  }
  if (i > N) {
    star.push('**');
    space.pop();
    console.log(`${space.join('')}${star.join('')}`);
  }
}
