// https://www.acmicpc.net/problem/24723
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const n = Number(input);
console.log(2 ** n);
