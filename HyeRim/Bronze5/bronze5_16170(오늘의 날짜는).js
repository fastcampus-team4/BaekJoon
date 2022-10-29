const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

const date = new Date();

console.log(`${date.getFullYear()}\n${date.getMonth()+1}\n${date.getDate()}`)