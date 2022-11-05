// https://www.acmicpc.net/problem/5717
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

input.forEach((element) => {
  if (element[0] === 0 && element[1] === 0) return;
  console.log(element[0] + element[1]);
});
