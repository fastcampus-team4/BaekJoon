// https://www.acmicpc.net/problem/4740
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let x of input) {
  if (x === '***') break;
  let res = x.split('').reverse().join('');
  console.log(res);
}
