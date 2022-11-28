const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let res = [];
for (let i = 1; i < input.length; i++) {
  const word = input[i].trim();
  let ascii = [];
  for (let j = 0; j < word.length; j++) {
    const num = `${word}`.charCodeAt(j);
    ascii.push(num !== 90 ? num + 1 : 65);
  }
  res.push(`String #${i}\n${String.fromCharCode(...ascii)}`);
}
console.log(res.join('\n\n'));
