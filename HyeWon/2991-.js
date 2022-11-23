const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b, c, d] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// 2 (2) 2 (2) ...
// 1
for (let x of arr) {
  let cnt = 0;
  if (0 < x % (a + b) && x % (a + b) <= a) cnt++;
  if (0 < x % (c + d) && x % (c + d) <= c) cnt++;
  console.log(cnt);
}
