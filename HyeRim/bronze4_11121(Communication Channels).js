const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

answer = '';
for(let i = 1; i <= input[0]; i += 1) {
  const a = input[i].split(' ');
  answer = a[0] === a[1] ? 'OK' : 'ERROR'
  console.log(answer)
}
