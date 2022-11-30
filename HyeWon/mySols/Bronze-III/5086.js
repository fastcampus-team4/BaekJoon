// https://www.acmicpc.net/problem/5086
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let x of input) {
  if (x === '0 0') break;
  let arr = x.split(' ').map(Number);
  const [a, b] = [arr[0], arr[1]];
  if (b % a === 0) console.log('factor');
  else if (a % b === 0) console.log('multiple');
  else console.log('neither');
}
