// https://www.acmicpc.net/problem/15680
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const n = Number(input);

if (n === 0) {
  console.log('YONSEI');
} else if (n === 1) {
  console.log('Leading the Way to the Future');
}
