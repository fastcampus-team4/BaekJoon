const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
let cnt = 0;
let max = 99 + 99;
if (n > max) console.log(0);
else {
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      if (i + j === n) cnt++;
    }
  }
  console.log(cnt);
}
