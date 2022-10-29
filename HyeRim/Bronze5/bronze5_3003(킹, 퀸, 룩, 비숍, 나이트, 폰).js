const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

const piece = [1, 1, 2, 2, 2, 8];
console.log(input);
console.log(piece);

const answer = piece.map(function(el, index) {
  return el - input[index]
})

console.log(answer.join(' '))


