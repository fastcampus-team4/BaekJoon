const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const call = input[1].split(' ').map(Number);
const arrayY = [];
const arrayM = [];
call.forEach((ele) => arrayY.push((Math.floor(ele / 30) + 1) * 10));
call.forEach((ele) => arrayM.push((Math.floor(ele / 60) + 1) * 15));

const Y = arrayY.reduce((a, b) => a + b, 0);
const M = arrayM.reduce((a, b) => a + b, 0);

console.log(Y === M ? `Y M ${Y}` : Y > M ? `M ${M}` : `Y ${Y}`);
