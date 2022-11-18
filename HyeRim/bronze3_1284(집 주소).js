const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');


for(let i = 0; i < input.length - 1; i += 1) {
  let sum = 0;
  for(let j = 0; j < input[i].length; j += 1) {
    if(+input[i].charAt(j) === 1) {
      sum += 2
    } else if (+input[i].charAt(j) === 0) {
      sum += 4
    } else {
      sum += 3
    }
  }
  sum += input[i].length + 1
  console.log(sum)
}
