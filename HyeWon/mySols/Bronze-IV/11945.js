// https://www.acmicpc.net/problem/11945
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  console.log(input[i].trim().split('').reverse().join(''));
}
