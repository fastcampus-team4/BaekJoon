// https://www.acmicpc.net/problem/5073
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  if (input[i] === '0 0 0') break;
  let arr = input[i].split(' ').map(Number);
  arr.sort((a, b) => a - b);
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  if (c >= a + b) console.log('Invalid');
  else if (a === b && b === c && c === a) console.log('Equilateral');
  else if (a !== b && a !== c && b !== c) console.log('Scalene');
  else if (a === b || a === c || b === c) console.log('Isosceles');
}
