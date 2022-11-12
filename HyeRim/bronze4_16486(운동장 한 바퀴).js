const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [a, b] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);


console.log((a * 2) + (b * 2 * 3.141592))