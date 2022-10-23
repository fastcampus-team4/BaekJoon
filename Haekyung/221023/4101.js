const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// console.log(input)

let a = 0;
let b = 0;
for (i = 0; i < input.length - 1; i++) {
  let [a, b] = input[i].toString().split(' ').map(Number);
  if (a > b) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
