const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = '';

for (i = 1; i <= input[0]; i++) {
  let arr = [];
  arr = input[i].split(' ');
  answer += Number(arr[0]) + Number(arr[1]) + '\n';
}

console.log(answer);
