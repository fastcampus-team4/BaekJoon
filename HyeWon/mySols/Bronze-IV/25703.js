// https://www.acmicpc.net/problem/25703
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
let star = '';
let num = 0;
for (let i = 0; i < n; i++) {
  if (num === 0) console.log(`int a;`);
  star += '*';
  num++;
  if (num === 1) {
    console.log(`int ${star}ptr = &a;`);
    continue;
  } else {
    if (num - 1 === 1) console.log(`int ${star}ptr${num} = &ptr;`);
    else console.log(`int ${star}ptr${num} = &ptr${num - 1};`);
  }
}
