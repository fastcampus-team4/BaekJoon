const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

const space = Array(N - 1).fill(' ');
const star = ['*'];

for (let i = 0; i < N * 2 - 1; i++) {
  if (i < N - 1) {
    console.log(
      `${star.join('')}${space.join('')}${space.join('')}${star.join('')}`
    );
    star.push('*');
    space.pop();
  } else {
    console.log(
      `${star.join('')}${space.join('')}${space.join('')}${star.join('')}`
    );
    star.pop();
    space.push(' ');
  }
}
