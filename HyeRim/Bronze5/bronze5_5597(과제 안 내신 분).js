const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = input.sort((a, b) => a - b)

for(let i = 1; i <= 30; i += 1) {
    if(!input.includes(i)) {
        console.log(i)
    }
    
}