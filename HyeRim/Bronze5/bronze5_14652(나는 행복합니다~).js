const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const M = input[1]
const K = input[2]

console.log(`${parseInt(K / M)} ${parseInt(K % M)}`)
