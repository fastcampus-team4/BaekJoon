const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const res = [];
for (let i = 0; i < input.length; i++) {
  if (input[i].indexOf('FBI') !== -1) res.push(i + 1);
}
if (res.length !== 0) console.log(res.join(' '));
else console.log('HE GOT AWAY!');
