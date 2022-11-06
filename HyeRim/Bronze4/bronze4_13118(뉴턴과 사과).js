const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const p = input[0].split(' ').map(Number)
const [x, y, r] = input[1].split(' ').map(Number)

let answer = 0;

for(let i = 0; i < p.length; i += 1) {
  if(p[i] === x) {
    answer = i + 1
  }
}
console.log(answer)



