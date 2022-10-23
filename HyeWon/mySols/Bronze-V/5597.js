// https://www.acmicpc.net/problem/5597
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    console.log(i);
  }
}
