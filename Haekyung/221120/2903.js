const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());
let point = 2;
for (let i = 0; i < input; i++) {
  point += point - 1;
}

console.log(Math.pow(point, 2));
