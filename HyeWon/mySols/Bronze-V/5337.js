// https://www.acmicpc.net/problem/5337
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');

let answer = `.  .   .\n|  | _ | _. _ ._ _  _\n|/\\|(/.|(_.(_)[ | )(/.`;

console.log(answer);
