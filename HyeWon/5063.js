// https://www.acmicpc.net/problem/5063
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.shift());

for (let i = 0; i < n; i++) {
  let arr = input[i].split(' ').map(Number);
  const r = arr[0];
  const e = arr[1];
  const c = arr[2];
  if (r < e - c) console.log('advertise');
  else if (r > e - c) console.log('do not advertise');
  else console.log('does not matter');
}
