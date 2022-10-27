const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = input[0];
const h = input[1];

let answer = '';

if(a.length >= h.length) {
  answer = 'go'
} else {
  answer = 'no'
}

console.log(answer);
