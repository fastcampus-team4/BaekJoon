const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();


let answer = Number(input);

console.log(answer * (answer - 1))