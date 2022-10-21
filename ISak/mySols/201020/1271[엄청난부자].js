const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
//BigInt 로 매핑해야 정답 되는듯?
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(BigInt);

n = input[0];
m = input[1];
let ans = `${BigInt(n / m)}\n${n % m}`;

console.log(ans);
