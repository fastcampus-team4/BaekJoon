// https://www.acmicpc.net/problem/1703
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const res = [];
for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].trim().split(' ').map(Number);
  let answer = 1;
  for (let j = 1; j < arr.length; j += 2) {
    answer = answer * arr[j] - arr[j + 1];
  }
  res.push(answer);
}
console.log(res.join('\n'));
