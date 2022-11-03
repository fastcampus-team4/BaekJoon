// https://www.acmicpc.net/problem/2845
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const newInput = input.shift().split(' ');
const L = Number(newInput[0]); // 사람 수
const P = Number(newInput[1]); // 넓이
const num = L * P; // 총 사람수
const news = input.shift().split(' ');

for (let i = 0; i < news.length; i++) {
  console.log(news[i] - num);
}
