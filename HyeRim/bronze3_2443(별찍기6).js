const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let star = '*'.repeat(2 * input - 1).split('')
let start = -1;
let end = 2 * input - 1;
let answer = star.join('') + '\n'

for(let i = 1; i <= input; i += 1) {
    start +=1;
    end -= 1;
    star[start] = ' '
    star[end] = ''
    answer += star.join('') + '\n'
}

console.log(answer.trim())

