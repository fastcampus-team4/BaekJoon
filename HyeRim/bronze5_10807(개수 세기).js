const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const answer = input[1].trim().split(' ');
console.log(answer.filter((x) => x === input[2]).length)