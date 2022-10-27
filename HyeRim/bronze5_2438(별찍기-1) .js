const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

let star = '';

for(let i = 0; i < input; i += 1) {
  star += '*';
  console.log(star);
}