const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let star = '';

for(let i = 0; i < input.length; i += 1) {
  for(let j = 0; j < input[i]; j += 1) {
    star += ('*'.repeat(j + 1) + '\n')
  }
  
}

console.log(star)


