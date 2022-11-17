const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const quater = 25;
const dime = 10;
const nickel = 5;
const penny = 1;

const T = input[0];
function compute(num) {
  let a, b, c, d;
  a = Math.trunc(num / quater);

  b = Math.trunc((num % quater) / dime);

  c = Math.trunc(((num % quater) % dime) / nickel);

  d = ((num % quater) % dime) % nickel;

  return `${a} ${b} ${c} ${d}`;
}
let ans = "";
if (T >= 1) {
  for (let i = 1; i <= T; i++) {
    ans += `${compute(input[i])}\n`;
  }
  console.log(ans);
}
