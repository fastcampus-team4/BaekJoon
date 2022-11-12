// https://www.acmicpc.net/problem/24263
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const n = Number(input);

console.log(n);
console.log(1);
