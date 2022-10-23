// https://www.acmicpc.net/problem/2753
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const year = Number(input);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log('1');
} else {
  console.log('0');
}
