// https://www.acmicpc.net/problem/5893
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const N = '0b' + input;

const answer = (BigInt(N) * 17n).toString(2);
console.log(answer);
