// https://www.acmicpc.net/problem/2525
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const c = Number(input.pop());
let arr = input[0].split(' ').map(Number);
const [a, b] = [arr[0], arr[1]];
const min = (b + c) % 60;
const hour = a + parseInt((b + c) / 60);
if (hour >= 24) console.log(`${hour % 24} ${min}`);
else console.log(`${hour} ${min}`);
