const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for(i = 1; i < input.length; i += 1) {
  const str = input[i];

  const first = str[0]
  const last = str[str.length-1];

  console.log(first + last)
}