// https://www.acmicpc.net/problem/19944
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const n = input[0];
const m = input[1];

if (m <= n && m !== 1 && m !== 2) {
  console.log('OLDBIE!');
} else if (m === 1 || m === 2) {
  console.log('NEWBIE!');
} else {
  console.log('TLE!');
}
