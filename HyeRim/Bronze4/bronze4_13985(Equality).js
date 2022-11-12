const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const sum = Number(input[0]) + Number(input[2]);
let answer = ''
if (sum === Number(input[4])) {
  answer = 'YES'
} else {
  answer = 'NO'
}

console.log(answer)