// https://www.acmicpc.net/problem/10952
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.toString().trim().split(' '));
input;

for (let i = 0; i < input.length; i++) {
  let res = Number(input[i][0]) + Number(input[i][1]);
  if (res === 0) {
    break;
  } else {
    console.log(res);
  }
}
