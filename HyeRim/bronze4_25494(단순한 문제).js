const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = '';

for(let i = 1; i <= input[0]; i += 1) {
  let [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b)
  answer += a + '\n'
}
console.log(answer)

