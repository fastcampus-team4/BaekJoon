// https://www.acmicpc.net/problem/2721
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const t = input.shift();

function Tn(num) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res += i;
  }
  return res;
}
function Wn(n) {
  let answer = 0;
  for (let j = 1; j <= n; j++) {
    answer += j * Tn(j + 1);
  }
  return answer;
}
for (let x = 0; x < t; x++) {
  console.log(Wn(input[x]));
}
