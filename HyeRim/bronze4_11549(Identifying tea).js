const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const line = input[1].split(' ')
let answer = 0;
for(let i = 0; i < line.length; i += 1) {
  if(input[0] === line[i]) {
    answer += 1
  }
}
console.log(answer)
