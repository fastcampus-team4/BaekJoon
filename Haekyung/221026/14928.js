const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString();
const BN = BigInt(N);
console.log((BN % BigInt(20000303)).toString());
