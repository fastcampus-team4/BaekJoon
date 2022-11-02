const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function quotient(a, b) {
  return parseInt(a / b, 10);
}

let [A, B, C] = input[0].split(" ").map(Number);
let D = Number(input[1]);
let totalSec = C + B * 60 + A * 3600 + D;

let sec = totalSec % 60;
let min = quotient(totalSec, 60) % 60;
let hour = quotient(totalSec, 3600) % 24;
console.log(hour, min, sec);
