const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let star = '*'.repeat(input).split('')
for(let i = 0; i < input; i += 1) {
    console.log(i)
    star[i - 1] = ' '
    console.log(star.join(''))
}

