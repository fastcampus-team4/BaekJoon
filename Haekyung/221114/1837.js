const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [P, K] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

let flag = true;
for (let i = 2n; i < K; i++) {
  if (P % i === 0n) {
    console.log(`BAD ${i.toString()}`);
    flag = false;
    break;
  }
}
if (flag === true) console.log('GOOD');

// if (flag !== true) console.log('BAD', Math.min(...pw));
// else console.log('GOOD');

// let solution = (n) => {
//   let arr = Array(n + 1)
//     .fill(true)
//     .fill(false, 0, 2);
//   for (let i = 0; i < Number(n ** 0.5) + 1; i++) {
//     if (arr[i]) {
//       for (let j = i * i; j <= n; j += i) {
//         arr[j] = false;
//       }
//     }
//   }
//   return arr;
// };
