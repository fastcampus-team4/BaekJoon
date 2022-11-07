// https://www.acmicpc.net/problem/11948
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let n = [];
let m = [];
for (let i = 0; i < 4; i++) {
  n.push(input[i]);
}
for (let i = 4; i < input.length; i++) {
  m.push(input[i]);
}
n.sort((a, b) => a - b).shift();

m.sort((a, b) => a - b).shift();

const answer = n.reduce((acc, cur) => acc + cur) + m[0];
console.log(answer);
