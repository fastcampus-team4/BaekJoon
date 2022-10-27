// https://www.acmicpc.net/problem/4999
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const jh = input.shift();
const doctor = input.shift();

if (jh.length >= doctor.length) {
  console.log('go');
} else {
  console.log('no');
}
