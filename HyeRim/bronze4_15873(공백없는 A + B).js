const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

let a = input[0];
let b = input[1];
if(input.length > 2) {
  if(b === '0') {
    a += input[1]
    b = input.slice(2)
  } else {
    b = input.slice(1)
  }
}

console.log(parseInt(a) + parseInt(b))