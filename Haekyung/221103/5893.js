const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim();

// const big = BigInt(parseInt(N, 2));
// 이건 왜안되는거쥐,,

const big = BigInt(`0b${N}`);
const res = (big * 17n).toString(2);
console.log(res);
