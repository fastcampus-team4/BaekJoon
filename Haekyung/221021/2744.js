const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();
// console.log(input[0]);
const res = [];
for (i = 0; i < input.length; i++) {
  if (input[i].toUpperCase() === input[i]) {
    res.push(input[i].toLowerCase());
  } else res.push(input[i].toUpperCase());
}
console.log(res.join(''));
