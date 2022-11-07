// https://www.acmicpc.net/problem/14935
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

let x = input;
let x1 = 0;
let length = input.length;

while (true) {
  i = Number(x[0]) * length;
  if (x1 === i) {
    console.log('FA');
    break;
  } else {
    x1 = i;
    i = i.toString();
  }
}
