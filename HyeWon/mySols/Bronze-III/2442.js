// https://www.acmicpc.net/problem/2442
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
let star = '';
// 별의 개수는 1 3 5 7 9 ... 2n-1로 증가한다
// 별 앞에 공백은 4 3 2 1 로 감소한다, 즉 n - 1로 감소
for (let i = 1; i <= n; i++) {
  star += ' '.repeat(n - i) + '*'.repeat(i * 2 - 1) + '\n';
}
console.log(star);

//     *
//    ***
//   *****
//  *******
// *********
