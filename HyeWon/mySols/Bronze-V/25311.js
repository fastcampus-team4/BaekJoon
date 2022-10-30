// https://www.acmicpc.net/problem/25311
const { log } = require('console');

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const y = Number(input);
y;
if (y === 2018 || 2019 || 2020 || 2021) {
  console.log('A');
}
