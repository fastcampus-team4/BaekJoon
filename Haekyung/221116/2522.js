const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

let star = [];
let space = Array(N).fill(' ');

for (let i = 0; i < N * 2 - 1; i++) {
  if (i < N) {
    star.push('*');
    space.pop();
    console.log(`${space.join('')}${star.join('')}`);
  }
  if (i >= N) {
    star.pop();
    space.push(' ');
    console.log(`${space.join('')}${star.join('')}`);
  }
}
