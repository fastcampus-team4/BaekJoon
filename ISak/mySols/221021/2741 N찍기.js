const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs').readFileSync(filePath).toString();

N = Number(input);

ans = '';
for (let i = 1; i <= N; i++) {
  ans += `${i}\n`;
}
console.log(ans);
