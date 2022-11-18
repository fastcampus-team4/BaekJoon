const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');


const M = input[0];
let ball = 1;

for(let i = 1; i <= M; i += 1) {
  const [X, Y] = input[i].split(' ').map(Number)
  if(X === ball || Y === ball) {
    ball = (X === ball ? Y : X);
  }
}

console.log(ball)
