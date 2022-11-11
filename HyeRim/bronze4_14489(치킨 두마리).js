const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const mon = input[0].split(' ').map(Number)
const chick = Number(input[1] * 2);

let sum = 0;
for(let i = 0; i < mon.length; i += 1) {
  sum += mon[i]
}

let answer = 0;
if(sum < chick) {
  answer = sum
} else {
  answer = sum - chick;
}

console.log(answer)