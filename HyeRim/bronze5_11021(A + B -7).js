const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input)
for(let i = 1; i < input.length; i += 1) {
  console.log(i)

  const num = input[i].split(' ').map(Number);
  console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${num[0] + num[1]}`)
}
