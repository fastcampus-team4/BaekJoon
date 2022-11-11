const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [a, b, c, d] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const answer = a * c / (b * d * 2);
console.log(answer)
console.log(Math.floor(answer))
if(answer === Math.floor(answer)) {
  console.log(1);
} else {
  console.log(0)
}
