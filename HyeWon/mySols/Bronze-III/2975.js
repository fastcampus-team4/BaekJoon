// https://www.acmicpc.net/problem/2975
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
for (let x of input) {
  if (x === '0 W 0') break;
  let arr = x.split(' ');
  if (arr.includes('W')) answer = Number(arr[0]) - Number(arr[2]);
  else if (arr.includes('D')) answer = Number(arr[0]) + Number(arr[2]);

  if (answer < -200) console.log('Not allowed');
  else console.log(answer);
}
