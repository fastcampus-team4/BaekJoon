const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for(i = 1; i < input.length; i += 1) {
  
  console.log(input[i].charAt(0) + input[i].charAt(input[i].length-1))
}