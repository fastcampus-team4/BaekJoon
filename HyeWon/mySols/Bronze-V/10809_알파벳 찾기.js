// https://www.acmicpc.net/problem/10809
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

// 아스키코드 a: 97, z: 122
let res = [];

for (let i = 97; i <= 122; i++) {
  let alph = String.fromCharCode(i);
  let answer = input.indexOf(alph);
  res += `${answer} `;
}

console.log(res);
