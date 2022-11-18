const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n\n');

let testCase = [];
for (let i = 1; i <= input[0]; i++) {
  testCase.push(input[i].trim().split('\n').map(BigInt));
}

for (let i = 0; i < testCase.length; i++) {
  const student = testCase[i][0];
  const sum = testCase[i].reduce((a, b) => a + b, 0n) - student;
  if (sum % student === 0n) console.log('YES');
  else console.log('NO');
}
// let sum = 0n;
// for (let i = 0; i < testCase.length; i++) {
//   for (let j = 1; j < testCase[i].length; j++) {
//     sum = (sum + testCase[i][j]) % testCase[i][0];
//   }
//   if (sum === 0n) console.log('YES');
//   else console.log('NO');
// }
