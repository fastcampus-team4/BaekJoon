const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const t = input[0]
let cnt1 = 0;
cnt2 = 0;
for (let i = 1; i < t; i++) {
  const [a, b] = input[i].trim().split(' ');

}
console.log(a, b);
if (a === 'R' && b === 'P') cnt2++;
else if (a === 'R' && b === 'S') cnt1++;
else if (a === 'P' && b === 'R') cnt1++;
else if (a === 'P' && b === 'S') cnt2++;
else if (a === 'S' && b === 'R') cnt2++;
else if (a === 'S' && b === 'P') cnt1++;
else if (a === b) continue;
else {
  if (cnt1 === cnt2) console.log('TIE');
  else if (cnt1 > cnt2) console.log('Player1');
  else console.log('Player 2');
  cnt1 = 0;
  cnt2 = 0;
}
