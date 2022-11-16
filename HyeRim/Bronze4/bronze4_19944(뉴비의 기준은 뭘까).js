const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [N, M] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let answer = ''

if( 2 >= M ) answer = 'NEWBIE!'
else if(N < M) answer = 'TLE!'
else answer = 'OLDBIE!'

console.log(answer)