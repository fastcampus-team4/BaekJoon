//https://www.acmicpc.net/problem/1284
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();
for (let i = 0; i < input.length; i++) {
  let cnt = 0;
  cnt += input[i].split('').length + 1;
  for (let j = 0; j < input[i].split('').length; j++) {
    if (input[i].split('').map(Number)[j] === 0) cnt += 4;
    else if (input[i].split('').map(Number)[j] === 1) cnt += 2;
    else cnt += 3;
  }
  console.log(cnt);
}
