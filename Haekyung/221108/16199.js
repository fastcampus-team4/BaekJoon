const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const A = input[0].trim().split(' ').map(Number);
const B = input[1].trim().split(' ').map(Number);
const res = [];

let manAge = 0;

if (B[1] > A[1]) {
  manAge = B[0] - A[0];
} else if (B[1] === A[1] && B[2] >= A[2]) {
  manAge = B[0] - A[0];
} else manAge = B[0] - A[0] - 1;

res.push(manAge);
res.push(B[0] - A[0] + 1);
res.push(B[0] - A[0]);

console.log(res.join('\n'));

// 숏코딩
[[Y, M, D], [y, m, d]] = `${require('fs').readFileSync(0)}`
  .split('\n')
  .map((l) => l.split(' ').map((v) => +v));
a = y - Y;
console.log(`${(m === M && d < D) || m < M ? a - 1 : a}
${a + 1}
${a}`);
