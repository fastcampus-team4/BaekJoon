// https://www.acmicpc.net/problem/2441
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

let num = Number(input);
let star = new Array(num).fill('*');

for (let i = 0; i < num; i++) {
  if (i === 0) {
    console.log(star.join(''));
  }
  star[i] = ' ';
  console.log(star.join(''));
}
