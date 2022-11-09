// https://www.acmicpc.net/problem/16199
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const birth = input[0].split(' ').map(Number);
const current = input[1].split(' ').map(Number);
let age = current[0] - birth[0];

let manAge = 0;
let countAge = 1 + age;
let yearAge = age;
if (age !== 0) {
  if (current[1] > birth[1]) {
    manAge = age;
  } else if (current[1] < birth[1]) {
    manAge = age - 1;
  } else {
    // month가 같은 경우
    if (current[2] >= birth[2]) {
      manAge = age;
    } else {
      manAge = age - 1;
    }
  }
}
console.log(manAge);
console.log(countAge);
console.log(yearAge);
