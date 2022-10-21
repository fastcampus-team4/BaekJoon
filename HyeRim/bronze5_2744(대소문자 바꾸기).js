const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

console.log(input);

let answer = "";

for(let i = 0; i < input.length; i += 1) {
  if(input[i] === input[i].toLowerCase()) {
    answer += input[i].toUpperCase();
  } else {
    answer += input[i].toLowerCase();
  }
}

console.log(answer);