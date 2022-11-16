// https://www.acmicpc.net/problem/1703
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();
const answer = [];
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  let leaf = 1;
  for (let j = 1; j < arr.length; j += 2) {
    leaf = leaf * arr[j] - arr[j + 1];
  }
  answer.push(leaf);
}
console.log(answer.join('\n'));
