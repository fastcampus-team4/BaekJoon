const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

const space = Array(N - 1).fill(' ');
const star = ['*'];
for (let i = 0; i < N * 2 - 1; i++) {
  if (i < N - 1) {
    console.log(`${space.join('')}${star.join('')}`);
    space.pop();
    star.push('*');
    star.push('*');
  } else {
    console.log(`${space.join('')}${star.join('')}`);
    space.push(' ');
    star.pop();
    star.pop();
  }
}
