// https://www.acmicpc.net/problem/2588
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [x, y] = [input[0], input[1]];
let answer = 0;
let sum = 0;
for (let i = y.length - 1; i >= 0; i--) {
  answer = Number(x) * Number(y[i]);
  console.log(answer);
  sum += answer * Math.pow(10, y.length - 1 - i);
}
console.log(sum);
