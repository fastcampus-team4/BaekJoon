const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for(let i = 1; i < input.length; i += 1) {
  let num = Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1])
  console.log(num)
}


