const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input)

for(let i = 1; i < input.length; i += 1) {
  console.log(i)
  const a = input[i].split('').reverse()
  console.log(a.join(''))
}