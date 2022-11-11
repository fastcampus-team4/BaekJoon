const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [S, K, H] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (Math.min(S, K, H) === S) answer = 'Soongsil';
else if (Math.min(S, K, H) === K) answer = 'Korea';
else answer = 'Hanyang';

if (S + H + K >= 100) {
  console.log('OK');
} else {
  console.log(answer);
}

// 숏코딩
[a, b, c] = `${require('fs').readFileSync(0)}`.split(' ').map((v) => +v);
console.log(
  a + b + c >= 100
    ? 'OK'
    : a < b && a < c
    ? 'Soongsil'
    : b < c
    ? 'Korea'
    : 'Hanyang'
);
