const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().split('\n');

console.log(input)

let [hour, min, sec] = 
// const time = input[0].split(' ').map(Number);
// const sec = Number(input[1])