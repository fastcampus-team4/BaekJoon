const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = A.split(' ').map(Number)
console.log(a)
const b = B.split(' ').map(Number)
console.log(b)

let answer = 0;
for(let i = 0; i < a.length; i += 1) {
  console.log(i)
  if(b[i] - a[i] > 0) {
    answer += b[i] - a[i]
  }
}
console.log(answer)
