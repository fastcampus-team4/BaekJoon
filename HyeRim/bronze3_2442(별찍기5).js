const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let star = ''
for(let i = 1; i <= input; i += 1) {
    star += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n'
}
console.log(star)

