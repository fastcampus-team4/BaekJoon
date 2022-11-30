// https://www.acmicpc.net/problem/5724
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
// 1 2 3 4
// 1 5 14 30 ... answer
// 1 2*2 + 1 3*3 + 2*2 + 1*1

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) break;
  let answer = 0;
  for (let j = input[i]; j > 0; j--) {
    answer += j * j;
  }
  console.log(answer);
}
