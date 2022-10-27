const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if(a < b) {
  console.log('<');
} else if(a > b) {
  console.log('>');
} else {
  console.log('==');
}