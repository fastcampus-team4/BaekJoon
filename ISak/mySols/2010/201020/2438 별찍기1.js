const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs').readFileSync(filePath).toString();
const N = Number(input);
let ans = '';

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i + 1; j++) {
    ans += '*';
  }
  ans += '\n';
}
console.log(ans);
