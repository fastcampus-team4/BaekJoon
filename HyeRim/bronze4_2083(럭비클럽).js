const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = ''

for(let i = 0; i < input.length - 1; i += 1) {
  const arr = input[i].split(' ');

  if(arr[1] > 17 || arr[2] >= 80) {
    answer = 'Senior'
  } else {
    answer = 'Junior'
  }
  console.log(`${arr[0]} ${answer}`)
}