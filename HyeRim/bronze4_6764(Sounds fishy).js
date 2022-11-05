const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [a, b, c, d] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = '';

if(a < b && b < c && c < d) {
  answer = 'Fish Rising'
} else if(a > b && b > c && c > d) {
  answer = 'Fish Diving'
} else if(a === b && b === c && c === d) {
  answer = 'Fish At Constant Depth'
} else {
  answer = 'No Fish'
}

console.log(answer)