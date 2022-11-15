const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const res = [];
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  const people = input[i].trim().split(' ').map(Number);
  cnt = cnt + people[1] - people[0];
  res.push(cnt);
}
console.log(Math.max(...res));
