const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const res = [];
A.forEach((ele) => {
  if (ele < X) {
    res.push(ele);
  }
});
console.log(...res);
