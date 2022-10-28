// https://www.acmicpc.net/problem/4101
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  // input i번째 인덱스의 0, 1번째 인덱스를 가져온다
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  if (a === 0 && b === 0) {
    break;
  } else if (a > b) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
