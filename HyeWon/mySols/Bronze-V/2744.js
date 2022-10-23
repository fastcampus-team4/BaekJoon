// https://www.acmicpc.net/problem/2744

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

let result = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    result = result + input[i].toLowerCase();
  } else {
    result = result + input[i].toUpperCase();
  }
}

console.log(result);
