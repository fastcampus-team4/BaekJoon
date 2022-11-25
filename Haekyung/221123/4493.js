const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let cnt1 = 0;
let cnt2 = 0;
let i = 1;

for (i = i; i < input.length; i++) {
  // console.log(i)
  const test = input.slice(i + 1, i + Number(input[i]) + 1);

  for (let x of test) {
    const [a, b] = x.trim().split(' ');
    if (a === 'R' && b === 'P') cnt2++;
    else if (a === 'R' && b === 'S') cnt1++;
    else if (a === 'P' && b === 'R') cnt1++;
    else if (a === 'P' && b === 'S') cnt2++;
    else if (a === 'S' && b === 'R') cnt2++;
    else if (a === 'S' && b === 'P') cnt1++;
  }
  if (cnt1 === cnt2) console.log('TIE');
  else if (cnt1 > cnt2) console.log('Player 1');
  else console.log('Player 2');
  cnt1 = 0;
  cnt2 = 0;

  i = i + Number(input[i]);
}
