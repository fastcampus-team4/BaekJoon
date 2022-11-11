const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [a, b] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
let answer = '';

if(a >= 3 && b <= 4) {
  answer += 'TroyMartian\n'
}
if(a <= 6 && b >= 2) {
  answer += 'VladSaturnian\n'
}
if(a <= 2 && b <= 3) {
  answer += 'GraemeMercurian\n'
}

console.log(answer)