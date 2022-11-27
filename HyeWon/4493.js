// https://www.acmicpc.net/problem/4493
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const t = Number(input.shift());
let cnt = 0;
for (let i = 0; i < t; i++) {
  const n = Number(input[cnt]);
  let scoreP1 = 0;
  let scoreP2 = 0;
  cnt++;
  for (let j = 0; j < n; j++) {
    let p1 = input[cnt][0];
    let p2 = input[cnt][2];
    if (p1 === 'R' && p2 === 'P') scoreP2++;
    else if (p1 === 'R' && p2 === 'S') scoreP1++;
    else if (p1 === 'P' && p2 === 'R') scoreP1++;
    else if (p1 === 'P' && p2 === 'S') scoreP2++;
    else if (p1 === 'S' && p2 === 'R') scoreP2++;
    else if (p1 === 'S' && p2 === 'P') scoreP1++;
    cnt++;
  }
  if (scoreP1 > scoreP2) console.log('Player 1');
  else if (scoreP1 < scoreP2) console.log('Player 2');
  else if (scoreP1 === scoreP2) console.log('TIE');
}
