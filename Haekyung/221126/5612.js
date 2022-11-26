const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let car = Number(input[1]);
let max = car;
for (let i = 2; i < input.length; i++) {
  const carIn = input[i].split(' ').map(Number)[0];
  const carOut = input[i].split(' ').map(Number)[1];

  car += carIn - carOut;
  if (car < 0) {
    max = 0;
    break;
  } else if (car > max) {
    max = car;
  }
}
console.log(max);
