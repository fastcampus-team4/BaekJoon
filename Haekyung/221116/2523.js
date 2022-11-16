const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

let star = [];

for (let i = 0; i < N * 2 - 1; i++) {
  if (i < N) {
    star.push('*');
    console.log(`${star.join('')}`);
  }
  if (i >= N) {
    star.pop();
    console.log(`${star.join('')}`);
  }
}
