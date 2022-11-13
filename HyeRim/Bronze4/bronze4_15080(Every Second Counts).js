const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = input[0].split(' : ').map(Number)
const b = input[1].split(' : ').map(Number)

const time1 = (a[0] * 3600) + (a[1] * 60) + a[2] 
const time2 = (b[0] * 3600) + (b[1] * 60) + b[2]

let answer = 0;
if(time1 > time2) {
  answer = time2 - time1 + 3600 * 24
} else {
  answer = time2 - time1
}

console.log(answer)