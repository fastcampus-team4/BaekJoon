// https://www.acmicpc.net/problem/2083
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let newInput = input.map((e) => e.split(' '));

while (true) {
  let arr = newInput.shift();
  let name = arr[0];
  let age = arr[1];
  let weight = arr[2];
  if (name === '#') break;
  if (age > 17 || weight >= 80) {
    console.log(`${name} Senior`);
  } else {
    console.log(`${name} Junior`);
  }
}
