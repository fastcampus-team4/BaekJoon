const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const list = input[1].split(' ').map(Number);
let count = 0;

list.forEach((ele) => {
  if (ele === Number(input[2])) {
    count += 1;
  }
});
console.log(count);
