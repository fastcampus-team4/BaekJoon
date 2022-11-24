// https://www.acmicpc.net/problem/3004
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
if (n % 2 === 0) console.log(Math.pow(n / 2 + 1, 2));
else console.log((parseInt(n / 2) + 1) * (parseInt(n / 2) + 1 + 1));
