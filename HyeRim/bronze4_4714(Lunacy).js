const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let str = '';
for(let i = 0; i < input.length - 1; i += 1) {
  str += `Objects weighing ${input[i].toFixed(2)} on Earth will weigh ${(input[i] * 0.167).toFixed(2)} on the moon.\n`
}

console.log(str)
