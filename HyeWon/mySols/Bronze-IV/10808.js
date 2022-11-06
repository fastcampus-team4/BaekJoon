// https://www.acmicpc.net/problem/10808
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const s = input[0];
let map = new Map();
let answer = [];

for (let x of s) {
  map.set(x, (map.get(x) || 0) + 1);
}
console.log(map);
for (let i = 97; i <= 122; i++) {
  if (!map.has(String.fromCharCode(i))) {
    answer.push(0);
  } else {
    answer.push(map.get(String.fromCharCode(i)));
  }
}
console.log(...answer);
