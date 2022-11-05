const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [mon, day] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = '';

if(mon > 2) {
  answer = 'After'
} else if (mon < 2) {
  answer = 'Before'
} else if(mon === 2) {
  if(day > 18) {
    answer = 'After'
  } else if (day < 18) {
    answer = 'Before'
  } else {
    answer = 'Special'
  }
}

console.log(answer)