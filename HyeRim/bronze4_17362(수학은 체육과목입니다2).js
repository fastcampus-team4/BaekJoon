const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let num = parseInt(input) % 8
console.log(num)

if(num === 0) {
  num = 2;
} else if(num === 6) {
  num = 4;
} else if(num === 7) {
  num = 3;
}


console.log(num)