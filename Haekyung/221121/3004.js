const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = Number(require('fs').readFileSync(filePath).toString());

if (input % 2 === 0) {
  console.log(Math.pow(input / 2 + 1, 2));
} else {
  console.log(Math.ceil(input / 2) * (Math.ceil(input / 2) + 1));
}
