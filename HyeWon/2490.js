// https://www.acmicpc.net/problem/2490
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  let cnt = arr.filter((e) => 1 === e).length;
  if (cnt === 3) console.log('A');
  if (cnt === 2) console.log('B');
  if (cnt === 1) console.log('C');
  if (cnt === 0) console.log('D');
  if (cnt === 4) console.log('E');
}
