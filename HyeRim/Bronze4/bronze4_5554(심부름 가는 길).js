const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [a, b, c, d] = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

let totalSec = a + b + c + d;

let totalMin = 0;
if(totalSec > 60) {
  totalMin = Math.floor(totalSec / 60);
} else if(totalSec === 60) {
  totalMin = 1;
}

totalSec = totalSec % 60;
console.log(`${totalMin}\n${totalSec}`)

