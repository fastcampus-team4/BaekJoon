const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [a, b] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let star = ''

for(let i = 0; i < a; i += 1) {
  for(let j = 0; j < b; j += 1) {
    star += '*'
  }
  console.log(star)
  star = ''
}

