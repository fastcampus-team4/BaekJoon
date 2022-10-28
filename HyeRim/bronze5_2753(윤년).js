const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

if(((input % 4 === 0) && (input % 100 !== 0)) || input % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
