// https://www.acmicpc.net/problem/24883
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const n = input;
if (n === 'N' || n === 'n') {
  console.log('Naver D2');
} else {
  console.log('Naver Whale');
}
