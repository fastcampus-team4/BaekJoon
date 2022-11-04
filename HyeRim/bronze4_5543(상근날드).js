const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

let answer = 0;
for(let i = 0; i < input.length - 2; i += 1) {
  console.log(input[i])
  for(let j = 3; j < input.length; j += 1) {
    console.log(input[j])
    answer = input[i] + input[j] - 50
    console.log(answer)
  }
}

