const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let ch =  input[0] * input[1] - input[2]

if(ch < 0) {
  ch = 0
}

console.log(ch)
