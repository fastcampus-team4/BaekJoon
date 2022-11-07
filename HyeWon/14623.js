// https://www.acmicpc.net/problem/14623
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const [b1, b2] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(BigInt);
b1;
const mul = BigInt('0b' + b1) * BigInt('0b' + b2);

const answer = Number(mul.toString(2));
console.log(answer);

// const mul = (BigInt("0b" + b1.toString()) * BigInt("0b" + b2.toString()));

// const answer = Number(mul.toString(2));
// console.log(answer);
