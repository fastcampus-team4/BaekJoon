const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [A, B, C, D, E, F] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = [A, B, C, D].sort((a, b) => b - a).map(Number)
const b = [E, F].sort((a, b) => b - a).map(Number)

a.pop();
b.pop();

const answer = a.reduce((prev, next) => prev + next) + b[0]

console.log(answer)


