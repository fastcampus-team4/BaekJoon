const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [N, P] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = 0;
if(N >= 0 && N < 5) {
  answer = P
} else if(N >= 5 && N < 10) {
  answer = P - 500 < 0 ? 0 : P - 500
} else if (N >= 10 && N < 15) {
  answer = Math.min(P - 500 < 0 ? 0 : P - 500, P * 0.9)
} else if(N >= 15 && N < 20) {
  answer = Math.min(P - 500 < 0 ? 0 : P - 500, P * 0.9, P - 2000 < 0 ? 0 : P - 2000)
} else if (N >= 20) {
  answer = Math.min(P - 500 < 0 ? 0 : P - 500, P * 0.9, P - 2000 < 0 ? 0 : P - 2000, P * 0.75)
} else if (answer > P) {
  answer = 0
}

console.log(answer)