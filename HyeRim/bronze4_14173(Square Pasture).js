const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const a = input[0].split(' ').map(Number)
const b = input[1].split(' ').map(Number)

const ans1 = Math.max(a[2], b[2]) - Math.min(a[0], b[0])
const ans2 = Math.max(a[3], b[3]) - Math.min(a[1], b[1])
const ans = Math.max(ans1, ans2)
console.log(ans**2)