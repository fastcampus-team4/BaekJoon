// https://www.acmicpc.net/problem/5522
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0;
input.forEach((i) => (sum += i));

console.log(sum);
