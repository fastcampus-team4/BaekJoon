const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let answer = 0;

for(let i = 0; i < input.length; i += 1) {
  let num = Number(input[i].split(' '));
  answer += num
}

console.log(answer)

