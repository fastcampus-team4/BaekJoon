// https://www.acmicpc.net/problem/2443
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
let star = '';
// 별의 개수는 2n-1 ... 9, 7, 5, 3, 1로 감소한다
// 별 앞,뒤 공백은 1, 2, 3, 4 ... 로 증가한다
for (let i = n; i > 0; i--) {
  star = ' '.repeat(n - i) + '*'.repeat(i * 2 - 1);
  console.log(star);
}

// *********
//  *******
//   *****
//    ***
//     *
