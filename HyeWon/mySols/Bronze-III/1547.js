// https://www.acmicpc.net/problem/1547
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const m = input.shift();
let cup = [0, 1, 0, 0]; // 공의 위치는 맨 처음 1번 컵이 있던 위치
for (let i = 0; i < m; i++) {
  [x, y] = [input[i].split(' ').map(Number)[0], input[i].split(' ').map(Number)[1]];
  [cup[x], cup[y]] = [cup[y], cup[x]];
}
if (cup[1] === 1) console.log(1);
else if (cup[2] === 1) console.log(2);
else console.log(3);
