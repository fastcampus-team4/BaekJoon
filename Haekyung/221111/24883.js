const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

console.log(input === 'N' || input === 'n' ? 'Naver D2' : 'Naver Whale');
