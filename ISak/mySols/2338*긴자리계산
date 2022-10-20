const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(BigInt); //BigInt 함수를 이용해야 한다.

let A = input[0];
let B = input[1];
// string 형태로 답을 출력해야 한다.
ans = `${A + B}\n${A - B}\n${A * B}`;

console.log(ans);
