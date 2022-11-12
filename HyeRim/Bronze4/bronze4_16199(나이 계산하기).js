const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [y1, m1, d1] = input[0].split(' ').map(Number)
let [y2, m2, d2] = input[1].split(' ').map(Number)

ans = y2 - y1 - 1 
if(m1 < m2 || (m1 == m2 && d1 <= d2)) console.log(ans+1) 
else console.log(ans) 

ans = y2 - y1 + 1 
console.log(ans)

ans = y2 - y1 
console.log(ans)