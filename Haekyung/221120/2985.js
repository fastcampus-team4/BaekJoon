const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [A, B, C] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (A + B === C) {
  return console.log(`${A}+${B}=${C}`);
} else if (A - B === C) {
  return console.log(`${A}-${B}=${C}`);
} else if (A * B === C) {
  return console.log(`${A}*${B}=${C}`);
} else if (A / B === C) {
  return console.log(`${A}/${B}=${C}`);
} else if (A === B + C) {
  return console.log(`${A}=${B}+${C}`);
} else if (A === B - C) {
  return console.log(`${A}=${B}-${C}`);
} else if (A === B * C) {
  return console.log(`${A}=${B}*${C}`);
} else return console.log(`${A}=${B}/${C}`);
