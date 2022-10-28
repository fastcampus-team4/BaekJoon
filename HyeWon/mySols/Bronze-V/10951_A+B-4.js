// https://www.acmicpc.net/problem/10951

let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.toString().trim().split(' '));
input;

for (let i = 0; i < input.length; i++) {
  let res = Number(input[i][0]) + Number(input[i][1]);
  console.log(res);
}
