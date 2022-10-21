const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

const A = parseInt(input[0]); //10
const B = parseInt(input[1]); //2

if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else {
  console.log('==');
}
