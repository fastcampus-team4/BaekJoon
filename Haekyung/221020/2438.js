const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

let star = '';
for (i = 0; i < input; i++) {
  star += '*';
  console.log(star);
}