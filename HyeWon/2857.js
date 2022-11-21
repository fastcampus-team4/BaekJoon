// https://www.acmicpc.net/problem/2857
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let flag = false;
let arr = [];
for (let i = 0; i < 5; i++) {
  if (input[i].includes('FBI')) {
    flag = true;
    arr.push(i + 1);
  }
}
if (flag === false) console.log('HE GOT AWAY!');
else console.log(arr.join(' '));
