// https://www.acmicpc.net/problem/3029
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b, c] = input[0].split(':').map(Number);
const [x, y, z] = input[1].split(':').map(Number);
const sum1 = a * 3600 + b * 60 + c;
const sum2 = x * 3600 + y * 60 + z;
let answer = sum2 - sum1;
if (answer <= 0) answer += 24 * 3600;
let h = parseInt(answer / 3600);
let m = parseInt((answer % 3600) / 60);
let s = (answer % 3600) % 60;

let time = [];
h < 10 ? time.push(`0${h}`) : time.push(h);
m < 10 ? time.push(`0${m}`) : time.push(m);
s < 10 ? time.push(`0${s}`) : time.push(s);
console.log(time.join(':'));
