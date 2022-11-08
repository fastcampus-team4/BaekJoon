// https://www.acmicpc.net/problem/14623
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const [b1, b2] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const mul = BigInt('0b' + b1) * BigInt('0b' + b2);
const answer = mul.toString(2);
console.log(answer);
