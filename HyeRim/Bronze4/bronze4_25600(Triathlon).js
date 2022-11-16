const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = 0
for(let i = 1; i <= input[0]; i += 1) {
  const [a, d, g] = input[i].split(' ').map(Number)
  let score = a * (d + g)
  if(a === (d + g)) score *= 2
  answer = Math.max(answer, score)
}
console.log(answer)