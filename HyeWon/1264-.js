// https://www.acmicpc.net/problem/1264
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const vow = ['a', 'e', 'i', 'o', 'u'];

while (true) {
  let cnt = 0;
  let str = input.shift().toLowerCase();
  if (str === '#') break;
  for (let char of str) {
    if (vow.includes(char)) {
      cnt += 1;
    }
  }
  console.log(cnt);
}
