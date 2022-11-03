// https://www.acmicpc.net/problem/5543
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const sprite = Number(input.pop()); // 콜라
const coke = Number(input.pop()); // 사이다

let beverage = 0;
if (coke > sprite) {
  beverage = sprite;
} else {
  beverage = coke;
}

let hamburger = Number.MAX_SAFE_INTEGER;
for (x of input) {
  if (x < hamburger) {
    hamburger = x;
  }
}

const answer = hamburger + beverage - 50;
console.log(answer);
