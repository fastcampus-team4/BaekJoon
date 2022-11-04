const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n');

const a = input[0].split(' ')
const b = input[1].split(' ')

let answer = 0;
for(let i = 0; i < b.length; i += 1) {
  answer = b[i] - (a[0] * a[1])

  console.log(answer)
}