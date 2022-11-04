const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let min = input[0].split(' ').map(Number).reduce((a, b) => a + b)
let man = input[1].split(' ').map(Number).reduce((a, b) => a + b)

let answer = 0;

if(min > man) {
  answer = min;
} else if(min < man) {
  answer = man;
} else {
  answer = min;
}

console.log(answer)