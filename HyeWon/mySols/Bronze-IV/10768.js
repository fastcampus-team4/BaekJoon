// https://www.acmicpc.net/problem/10768
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = '';
if (input[0] > 2) answer = 'After';
if (input[0] < 2) answer = 'Before';
if (input[0] === 2) {
  if (input[1] === 18) answer = 'Special';
  if (input[1] > 18) answer = 'After';
  if (input[1] < 18) answer = 'Before';
}
console.log(answer);
