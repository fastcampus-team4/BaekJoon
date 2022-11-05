const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString();

for(let i = 1; i <= input; i += 1) {
  console.log(`Hello World, Judge ${i}!`)
}