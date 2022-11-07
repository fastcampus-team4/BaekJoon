const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let str = ''
for(let i = 0; i < input.length - 1; i += 1) {
  str += input[i].split('').reverse().join('') + '\n'
}
console.log(str)
