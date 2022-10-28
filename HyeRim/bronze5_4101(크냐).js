const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < input.length -1; i += 1) {
  let answer = '';

  const num = input[i].split(' ');

  const a = Number(num[0]);
  const b = Number(num[1]);

  if(a > b) {
    answer = 'Yes'
  } else {
    answer = 'No'
  }

  console.log(answer)
}
