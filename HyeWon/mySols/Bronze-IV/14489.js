// https://www.acmicpc.net/problem/14489
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const money = a + b;

const answer = money < c * 2 ? money : money - c * 2;
console.log(answer);
