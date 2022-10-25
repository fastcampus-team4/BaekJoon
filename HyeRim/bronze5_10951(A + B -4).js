const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < input.length; i += 1) {
  const num = input[i].split(' ')
  console.log(Number(num[0]) + Number(num[1]))
}
