const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

const answer = [];

for(let i = 97; i <= 122; i += 1) {
  answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(' '))