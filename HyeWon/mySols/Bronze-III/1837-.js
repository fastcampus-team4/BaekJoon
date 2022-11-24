const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);
input;
const P = input[0];
const K = input[1];

let flag = true;
for (let i = 2n; i < K; i++) {
  if (P % i === 0n) {
    console.log(`BAD ${i.toString()}`);
    flag = false;
    break;
  }
}
if (flag) console.log('GOOD');
