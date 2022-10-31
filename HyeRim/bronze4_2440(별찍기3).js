const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

for(let i = input; i >= 1; i -= 1) {
  console.log('*'.repeat(i))
}
