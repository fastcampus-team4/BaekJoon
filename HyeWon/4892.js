// https://www.acmicpc.net/problem/4892
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) break;
  const n1 = 3 * input[i];
  let n2 = 0;
  if (n1 % 2 === 0) n2 = n1 / 2;
  else n2 = (n1 + 1) / 2;
  let n3 = 3 * n2;
  let n4 = parseInt(n3 / 9);
  if (input[i] === 2 * n4) {
    console.log(`${i + 1}. even ${n4}`);
  } else {
    console.log(`${i + 1}. odd ${n4}`);
  }
}
