// https://www.acmicpc.net/problem/13118
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const apple = input[1];
const x = apple[0];

const people = input[0];
let answer = 0;

for (let i = 0; i < people.length; i++) {
  if (people[i] === x) {
    answer = i + 1;
    break;
  } else {
    answer = 0;
  }
}
console.log(answer);
