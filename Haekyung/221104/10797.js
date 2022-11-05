const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');
const car = N[1].split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < 5; i++) {
  if (Number(N[0]) === car[i]) {
    cnt++;
  }
}
console.log(cnt);
