const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = '';
let count = 0;
for(let i = 0; i < input.length; i += 1) {
  const win = input[i].includes("W")
  if(win) {
    count += 1
  }

  if(! count) {
    answer = -1
  } else if(count === 5 || count === 6) {
    answer = 1
  } else if(count === 3 || count === 4) {
    answer = 2
  } else if(count === 1 || count === 2) {
    answer = 3
  }
}
console.log(answer)