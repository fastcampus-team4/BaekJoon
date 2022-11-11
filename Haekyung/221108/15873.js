const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');

let answer = 0;
if (input.indexOf('0') === -1) {
  answer = Number(input[0]) + Number(input[1]);
} else if (input.indexOf('0') === 1 && input.length === 4) {
  answer = 20;
} else if (input.indexOf('0') === 1 && input.length !== 4) {
  answer = 10 + Number(input[2]);
} else if (input.indexOf('0') === 2) {
  answer = 10 + Number(input[0]);
}
return console.log(answer);

// 숏코딩..
console.log(
  `${require('fs').readFileSync(0)}`
    .replace(/0/g, '9')
    .split('')
    .reduce((a, b) => +a + +b)
);
