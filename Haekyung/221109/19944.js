const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [N, M] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(M < 3 ? 'NEWBIE!' : M <= N ? 'OLDBIE!' : 'TLE!');
