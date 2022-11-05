const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let str = '';
for(let i = 1; i <= input[0]; i += 1) {
  str += input[i].toLowerCase() + '\n'
}

console.log(str)
