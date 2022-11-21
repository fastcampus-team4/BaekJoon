// https://www.acmicpc.net/problem/2712
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const t = Number(input.shift());
for (let x of input) {
  if (x.includes('kg')) console.log((parseFloat(x) * 2.2046).toFixed(4) + ' lb');
  else if (x.includes('l') && !x.includes('b')) console.log((parseFloat(x) * 0.2642).toFixed(4) + ' g');
  else if (x.includes('lb')) console.log((parseFloat(x) * 0.4536).toFixed(4) + ' kg');
  else if (x.includes('g')) console.log((parseFloat(x) * 3.7854).toFixed(4) + ' l');
}
