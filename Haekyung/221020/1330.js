const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const a = input[0] * 1;
const b = input[1] * 1;

if (a < b) {
  console.log('<');
} else if (a > b) {
  console.log('>');
} else if (a === b) {
  console.log('==');
}
