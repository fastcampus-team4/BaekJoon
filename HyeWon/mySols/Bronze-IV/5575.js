// https://www.acmicpc.net/problem/5575
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

for (let i = 0; i < input.length; i++) {
  // 초로 전부 환산
  let sec1 = input[i][0] * 3600 + input[i][1] * 60 + input[i][2];
  let sec2 = input[i][3] * 3600 + input[i][4] * 60 + input[i][5];
  let time = sec2 - sec1;
  let second = time % 60;
  let min = parseInt(time / 60) % 60;
  let hour = parseInt(time / 60 / 60) % 24;

  console.log(`${hour} ${min} ${second}`);
}
