const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [a, ...b] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);


let answer = '';
for(let i = 0; i < a; i += 1) {
  answer += b[i] ** 2 + '\n'
}

console.log(answer)