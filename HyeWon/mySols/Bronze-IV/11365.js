// https://www.acmicpc.net/problem/11365
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();

input.forEach((element) => {
  let answer = element.split('').reverse().join('');
  console.log(answer);
});
