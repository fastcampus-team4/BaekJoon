const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();

let res = 0;
for (i = 1; i <= input; i++) {
  res += i;
}
console.log(res);
