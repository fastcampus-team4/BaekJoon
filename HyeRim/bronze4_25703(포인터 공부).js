const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

const memory = ['a', 'ptr'];
let star = '';

console.log('int a;');
for (let i = 0; i < input; i++) {
  star += '*';
  memory.push(`ptr${i+2}`);
  console.log(`int ${star}${memory[i + 1]} = &${memory[i]};`);
}