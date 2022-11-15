const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const jinho = input[0]

let answer = 0;
for(let i = 2; i < input.length; i += 1) {
  if(input[i].includes(jinho)) {
    answer += 1
  }
}
console.log(answer)