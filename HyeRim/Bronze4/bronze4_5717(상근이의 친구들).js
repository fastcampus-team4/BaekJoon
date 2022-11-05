const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input)

let answer = '';
for(let i = 0; i < input.length -1; i += 1) {
  console.log(i)
  let num = input[i].split(' ').map(Number)
  console.log(num)
  answer = num[0] + num[1]
  console.log(answer)
}